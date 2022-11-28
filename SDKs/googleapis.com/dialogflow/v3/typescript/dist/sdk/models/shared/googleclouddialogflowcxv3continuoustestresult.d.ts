import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum {
    AggregatedTestResultUnspecified = "AGGREGATED_TEST_RESULT_UNSPECIFIED",
    Passed = "PASSED",
    Failed = "FAILED"
}
/**
 * Represents a result from running a test case in an agent environment.
**/
export declare class GoogleCloudDialogflowCxV3ContinuousTestResult extends SpeakeasyBase {
    name?: string;
    result?: GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum;
    runTime?: string;
    testCaseResults?: string[];
}
