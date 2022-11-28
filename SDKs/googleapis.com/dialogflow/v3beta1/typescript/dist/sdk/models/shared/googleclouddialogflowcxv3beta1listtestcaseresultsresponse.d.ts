import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TestCaseResult } from "./googleclouddialogflowcxv3beta1testcaseresult";
/**
 * The response message for TestCases.ListTestCaseResults.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    testCaseResults?: GoogleCloudDialogflowCxV3beta1TestCaseResult[];
}
