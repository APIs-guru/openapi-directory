import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CustomRankingInfoImportanceLevelEnum {
    ImportanceLevelUnspecified = "IMPORTANCE_LEVEL_UNSPECIFIED",
    None = "NONE",
    Low = "LOW",
    Mild = "MILD",
    Medium = "MEDIUM",
    High = "HIGH",
    Extreme = "EXTREME"
}


// CustomRankingInfo
/** 
 * Input only. Custom ranking information for SearchJobsRequest.
**/
export class CustomRankingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=importanceLevel" })
  importanceLevel?: CustomRankingInfoImportanceLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=rankingExpression" })
  rankingExpression?: string;
}
