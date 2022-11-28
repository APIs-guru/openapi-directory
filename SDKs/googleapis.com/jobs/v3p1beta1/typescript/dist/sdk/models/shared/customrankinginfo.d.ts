import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomRankingInfoImportanceLevelEnum {
    ImportanceLevelUnspecified = "IMPORTANCE_LEVEL_UNSPECIFIED",
    None = "NONE",
    Low = "LOW",
    Mild = "MILD",
    Medium = "MEDIUM",
    High = "HIGH",
    Extreme = "EXTREME"
}
/**
 * Input only. Custom ranking information for SearchJobsRequest.
**/
export declare class CustomRankingInfo extends SpeakeasyBase {
    importanceLevel?: CustomRankingInfoImportanceLevelEnum;
    rankingExpression?: string;
}
