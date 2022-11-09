import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SourceScoringConfigSourceImportanceEnum {
    Default = "DEFAULT"
,    Low = "LOW"
,    High = "HIGH"
}


// SourceScoringConfig
/** 
 * Set the scoring configuration. This allows modifying the ranking of results for a source.
**/
export class SourceScoringConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceImportance" })
  sourceImportance?: SourceScoringConfigSourceImportanceEnum;
}
