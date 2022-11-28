import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TestCaseResult } from "./googleclouddialogflowcxv3testcaseresult";



// GoogleCloudDialogflowCxV3ListTestCaseResultsResponse
/** 
 * The response message for TestCases.ListTestCaseResults.
**/
export class GoogleCloudDialogflowCxV3ListTestCaseResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=testCaseResults", elemType: GoogleCloudDialogflowCxV3TestCaseResult })
  testCaseResults?: GoogleCloudDialogflowCxV3TestCaseResult[];
}
