import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ContinuousTestResult } from "./googleclouddialogflowcxv3beta1continuoustestresult";
/**
 * The response message for Environments.ListTestCaseResults.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse extends SpeakeasyBase {
    continuousTestResults?: GoogleCloudDialogflowCxV3beta1ContinuousTestResult[];
    nextPageToken?: string;
}
