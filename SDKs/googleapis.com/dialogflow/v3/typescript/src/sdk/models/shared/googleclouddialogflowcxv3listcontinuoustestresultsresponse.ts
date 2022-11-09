import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3ContinuousTestResult } from "./googleclouddialogflowcxv3continuoustestresult";


// GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse
/** 
 * The response message for Environments.ListTestCaseResults.
**/
export class GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=continuousTestResults", elemType: shared.GoogleCloudDialogflowCxV3ContinuousTestResult })
  continuousTestResults?: GoogleCloudDialogflowCxV3ContinuousTestResult[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
