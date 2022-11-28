import { SpeakeasyBase } from "../../../internal/utils";
import { FilterPair } from "./filterpair";
import { Options } from "./options";
export declare enum ParametersTypeEnum {
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
/**
 * Parameters of a query or report.
**/
export declare class Parameters extends SpeakeasyBase {
    filters?: FilterPair[];
    groupBys?: string[];
    metrics?: string[];
    options?: Options;
    type?: ParametersTypeEnum;
}
