import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DerivedSource } from "./derivedsource";
import { SourceSplitShard } from "./sourcesplitshard";

export enum SourceSplitResponseOutcomeEnum {
    SourceSplitOutcomeUnknown = "SOURCE_SPLIT_OUTCOME_UNKNOWN"
,    SourceSplitOutcomeUseCurrent = "SOURCE_SPLIT_OUTCOME_USE_CURRENT"
,    SourceSplitOutcomeSplittingHappened = "SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED"
}


// SourceSplitResponse
/** 
 * The response to a SourceSplitRequest.
**/
export class SourceSplitResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundles", elemType: shared.DerivedSource })
  bundles?: DerivedSource[];

  @Metadata({ data: "json, name=outcome" })
  outcome?: SourceSplitResponseOutcomeEnum;

  @Metadata({ data: "json, name=shards", elemType: shared.SourceSplitShard })
  shards?: SourceSplitShard[];
}
