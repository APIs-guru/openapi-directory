import { SpeakeasyBase } from "../../../internal/utils";
import { Outcome } from "./outcome";
import { TestSuiteOverview } from "./testsuiteoverview";
export declare enum MergedResultStateEnum {
    UnknownState = "unknownState",
    Pending = "pending",
    InProgress = "inProgress",
    Complete = "complete"
}
/**
 * Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.
**/
export declare class MergedResult extends SpeakeasyBase {
    outcome?: Outcome;
    state?: MergedResultStateEnum;
    testSuiteOverviews?: TestSuiteOverview[];
}
