import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DerivedSource } from "./derivedsource";
import { SourceSplitShard } from "./sourcesplitshard";


export enum SourceSplitResponseOutcomeEnum {
    SourceSplitOutcomeUnknown = "SOURCE_SPLIT_OUTCOME_UNKNOWN",
    SourceSplitOutcomeUseCurrent = "SOURCE_SPLIT_OUTCOME_USE_CURRENT",
    SourceSplitOutcomeSplittingHappened = "SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED"
}


// SourceSplitResponse
/** 
 * The response to a SourceSplitRequest.
**/
export class SourceSplitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundles", elemType: DerivedSource })
  bundles?: DerivedSource[];

  @SpeakeasyMetadata({ data: "json, name=outcome" })
  outcome?: SourceSplitResponseOutcomeEnum;

  @SpeakeasyMetadata({ data: "json, name=shards", elemType: SourceSplitShard })
  shards?: SourceSplitShard[];
}
