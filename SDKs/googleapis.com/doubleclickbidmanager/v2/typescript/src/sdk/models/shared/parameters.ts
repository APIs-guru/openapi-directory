import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilterPair } from "./filterpair";
import { Options } from "./options";

export enum ParametersTypeEnum {
    ReportTypeUnspecified = "REPORT_TYPE_UNSPECIFIED"
,    Standard = "STANDARD"
,    InventoryAvailability = "INVENTORY_AVAILABILITY"
,    AudienceComposition = "AUDIENCE_COMPOSITION"
,    Floodlight = "FLOODLIGHT"
,    Youtube = "YOUTUBE"
,    Grp = "GRP"
,    YoutubeProgrammaticGuaranteed = "YOUTUBE_PROGRAMMATIC_GUARANTEED"
,    Reach = "REACH"
,    UniqueReachAudience = "UNIQUE_REACH_AUDIENCE"
,    FullPath = "FULL_PATH"
,    PathAttribution = "PATH_ATTRIBUTION"
}


// Parameters
/** 
 * Parameters of a query or report.
**/
export class Parameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.FilterPair })
  filters?: FilterPair[];

  @Metadata({ data: "json, name=groupBys" })
  groupBys?: string[];

  @Metadata({ data: "json, name=metrics" })
  metrics?: string[];

  @Metadata({ data: "json, name=options" })
  options?: Options;

  @Metadata({ data: "json, name=type" })
  type?: ParametersTypeEnum;
}
