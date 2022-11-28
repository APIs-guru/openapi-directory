import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Outcome } from "./outcome";
import { TestSuiteOverview } from "./testsuiteoverview";


export enum MergedResultStateEnum {
    UnknownState = "unknownState",
    Pending = "pending",
    InProgress = "inProgress",
    Complete = "complete"
}


// MergedResult
/** 
 * Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.
**/
export class MergedResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outcome" })
  outcome?: Outcome;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: MergedResultStateEnum;

  @SpeakeasyMetadata({ data: "json, name=testSuiteOverviews", elemType: TestSuiteOverview })
  testSuiteOverviews?: TestSuiteOverview[];
}
