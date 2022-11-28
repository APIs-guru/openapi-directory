import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterPair } from "./filterpair";
import { Options } from "./options";


export enum ParametersTypeEnum {
    ReportTypeUnspecified = "REPORT_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    InventoryAvailability = "INVENTORY_AVAILABILITY",
    AudienceComposition = "AUDIENCE_COMPOSITION",
    Floodlight = "FLOODLIGHT",
    Youtube = "YOUTUBE",
    Grp = "GRP",
    YoutubeProgrammaticGuaranteed = "YOUTUBE_PROGRAMMATIC_GUARANTEED",
    Reach = "REACH",
    UniqueReachAudience = "UNIQUE_REACH_AUDIENCE",
    FullPath = "FULL_PATH",
    PathAttribution = "PATH_ATTRIBUTION"
}


// Parameters
/** 
 * Parameters of a query or report.
**/
export class Parameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: FilterPair })
  filters?: FilterPair[];

  @SpeakeasyMetadata({ data: "json, name=groupBys" })
  groupBys?: string[];

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: string[];

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: Options;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ParametersTypeEnum;
}
