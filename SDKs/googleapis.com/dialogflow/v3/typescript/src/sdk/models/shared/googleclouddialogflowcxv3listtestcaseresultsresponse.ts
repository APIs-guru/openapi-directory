import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3TestCaseResult } from "./googleclouddialogflowcxv3testcaseresult";


// GoogleCloudDialogflowCxV3ListTestCaseResultsResponse
/** 
 * The response message for TestCases.ListTestCaseResults.
**/
export class GoogleCloudDialogflowCxV3ListTestCaseResultsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=testCaseResults", elemType: shared.GoogleCloudDialogflowCxV3TestCaseResult })
  testCaseResults?: GoogleCloudDialogflowCxV3TestCaseResult[];
}
