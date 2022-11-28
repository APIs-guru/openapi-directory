import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ContinuousTestResult } from "./googleclouddialogflowcxv3beta1continuoustestresult";



// GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse
/** 
 * The response message for Environments.ListTestCaseResults.
**/
export class GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continuousTestResults", elemType: GoogleCloudDialogflowCxV3beta1ContinuousTestResult })
  continuousTestResults?: GoogleCloudDialogflowCxV3beta1ContinuousTestResult[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
