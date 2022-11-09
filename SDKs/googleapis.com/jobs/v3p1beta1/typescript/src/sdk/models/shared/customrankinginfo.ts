import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CustomRankingInfoImportanceLevelEnum {
    ImportanceLevelUnspecified = "IMPORTANCE_LEVEL_UNSPECIFIED"
,    None = "NONE"
,    Low = "LOW"
,    Mild = "MILD"
,    Medium = "MEDIUM"
,    High = "HIGH"
,    Extreme = "EXTREME"
}


// CustomRankingInfo
/** 
 * Input only. Custom ranking information for SearchJobsRequest.
**/
export class CustomRankingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=importanceLevel" })
  importanceLevel?: CustomRankingInfoImportanceLevelEnum;

  @Metadata({ data: "json, name=rankingExpression" })
  rankingExpression?: string;
}
