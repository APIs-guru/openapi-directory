import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ContinuousTestResult } from "./googleclouddialogflowcxv3continuoustestresult";



// GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse
/** 
 * The response message for Environments.ListTestCaseResults.
**/
export class GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continuousTestResults", elemType: GoogleCloudDialogflowCxV3ContinuousTestResult })
  continuousTestResults?: GoogleCloudDialogflowCxV3ContinuousTestResult[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
