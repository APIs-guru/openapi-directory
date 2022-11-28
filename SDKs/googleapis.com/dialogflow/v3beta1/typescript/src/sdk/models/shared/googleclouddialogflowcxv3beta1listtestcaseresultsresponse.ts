import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TestCaseResult } from "./googleclouddialogflowcxv3beta1testcaseresult";



// GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse
/** 
 * The response message for TestCases.ListTestCaseResults.
**/
export class GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=testCaseResults", elemType: GoogleCloudDialogflowCxV3beta1TestCaseResult })
  testCaseResults?: GoogleCloudDialogflowCxV3beta1TestCaseResult[];
}
