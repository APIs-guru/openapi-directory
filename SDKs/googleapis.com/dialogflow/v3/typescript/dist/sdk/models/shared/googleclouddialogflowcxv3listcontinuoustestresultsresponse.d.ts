import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ContinuousTestResult } from "./googleclouddialogflowcxv3continuoustestresult";
/**
 * The response message for Environments.ListTestCaseResults.
**/
export declare class GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse extends SpeakeasyBase {
    continuousTestResults?: GoogleCloudDialogflowCxV3ContinuousTestResult[];
    nextPageToken?: string;
}
