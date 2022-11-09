import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1ContinuousTestResult } from "./googleclouddialogflowcxv3beta1continuoustestresult";


// GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse
/** 
 * The response message for Environments.ListTestCaseResults.
**/
export class GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=continuousTestResults", elemType: shared.GoogleCloudDialogflowCxV3beta1ContinuousTestResult })
  continuousTestResults?: GoogleCloudDialogflowCxV3beta1ContinuousTestResult[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
