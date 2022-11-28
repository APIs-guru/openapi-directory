import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TestCaseResult } from "./googleclouddialogflowcxv3testcaseresult";
/**
 * The response message for TestCases.ListTestCaseResults.
**/
export declare class GoogleCloudDialogflowCxV3ListTestCaseResultsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    testCaseResults?: GoogleCloudDialogflowCxV3TestCaseResult[];
}
