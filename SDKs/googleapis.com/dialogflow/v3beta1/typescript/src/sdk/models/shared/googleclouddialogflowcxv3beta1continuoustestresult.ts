import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum {
    AggregatedTestResultUnspecified = "AGGREGATED_TEST_RESULT_UNSPECIFIED"
,    Passed = "PASSED"
,    Failed = "FAILED"
}


// GoogleCloudDialogflowCxV3beta1ContinuousTestResult
/** 
 * Represents a result from running a test case in an agent environment.
**/
export class GoogleCloudDialogflowCxV3beta1ContinuousTestResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=result" })
  result?: GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum;

  @Metadata({ data: "json, name=runTime" })
  runTime?: string;

  @Metadata({ data: "json, name=testCaseResults" })
  testCaseResults?: string[];
}
