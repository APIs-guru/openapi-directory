import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Outcome } from "./outcome";
import { TestSuiteOverview } from "./testsuiteoverview";

export enum MergedResultStateEnum {
    UnknownState = "unknownState"
,    Pending = "pending"
,    InProgress = "inProgress"
,    Complete = "complete"
}


// MergedResult
/** 
 * Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.
**/
export class MergedResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=outcome" })
  outcome?: Outcome;

  @Metadata({ data: "json, name=state" })
  state?: MergedResultStateEnum;

  @Metadata({ data: "json, name=testSuiteOverviews", elemType: shared.TestSuiteOverview })
  testSuiteOverviews?: TestSuiteOverview[];
}
