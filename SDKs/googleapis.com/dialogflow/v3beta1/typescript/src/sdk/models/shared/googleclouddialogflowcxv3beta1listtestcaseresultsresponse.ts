import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1TestCaseResult } from "./googleclouddialogflowcxv3beta1testcaseresult";


// GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse
/** 
 * The response message for TestCases.ListTestCaseResults.
**/
export class GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=testCaseResults", elemType: shared.GoogleCloudDialogflowCxV3beta1TestCaseResult })
  testCaseResults?: GoogleCloudDialogflowCxV3beta1TestCaseResult[];
}
