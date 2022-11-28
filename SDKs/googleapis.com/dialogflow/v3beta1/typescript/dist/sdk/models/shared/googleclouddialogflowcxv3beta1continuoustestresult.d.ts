import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum {
    AggregatedTestResultUnspecified = "AGGREGATED_TEST_RESULT_UNSPECIFIED",
    Passed = "PASSED",
    Failed = "FAILED"
}
/**
 * Represents a result from running a test case in an agent environment.
**/
export declare class GoogleCloudDialogflowCxV3beta1ContinuousTestResult extends SpeakeasyBase {
    name?: string;
    result?: GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum;
    runTime?: string;
    testCaseResults?: string[];
}
