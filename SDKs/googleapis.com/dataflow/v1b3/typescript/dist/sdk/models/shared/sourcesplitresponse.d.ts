import { SpeakeasyBase } from "../../../internal/utils";
import { DerivedSource } from "./derivedsource";
import { SourceSplitShard } from "./sourcesplitshard";
export declare enum SourceSplitResponseOutcomeEnum {
    SourceSplitOutcomeUnknown = "SOURCE_SPLIT_OUTCOME_UNKNOWN",
    SourceSplitOutcomeUseCurrent = "SOURCE_SPLIT_OUTCOME_USE_CURRENT",
    SourceSplitOutcomeSplittingHappened = "SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED"
}
/**
 * The response to a SourceSplitRequest.
**/
export declare class SourceSplitResponse extends SpeakeasyBase {
    bundles?: DerivedSource[];
    outcome?: SourceSplitResponseOutcomeEnum;
    shards?: SourceSplitShard[];
}
