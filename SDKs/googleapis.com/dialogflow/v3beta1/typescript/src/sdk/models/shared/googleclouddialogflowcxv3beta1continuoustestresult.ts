import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum {
    AggregatedTestResultUnspecified = "AGGREGATED_TEST_RESULT_UNSPECIFIED",
    Passed = "PASSED",
    Failed = "FAILED"
}


// GoogleCloudDialogflowCxV3beta1ContinuousTestResult
/** 
 * Represents a result from running a test case in an agent environment.
**/
export class GoogleCloudDialogflowCxV3beta1ContinuousTestResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum;

  @SpeakeasyMetadata({ data: "json, name=runTime" })
  runTime?: string;

  @SpeakeasyMetadata({ data: "json, name=testCaseResults" })
  testCaseResults?: string[];
}
