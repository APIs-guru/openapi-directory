import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SourceScoringConfigSourceImportanceEnum {
    Default = "DEFAULT",
    Low = "LOW",
    High = "HIGH"
}


// SourceScoringConfig
/** 
 * Set the scoring configuration. This allows modifying the ranking of results for a source.
**/
export class SourceScoringConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceImportance" })
  sourceImportance?: SourceScoringConfigSourceImportanceEnum;
}
