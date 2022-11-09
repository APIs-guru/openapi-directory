import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1TestCase } from "./googleclouddialogflowcxv3beta1testcase";


// GoogleCloudDialogflowCxV3beta1ListTestCasesResponse
/** 
 * The response message for TestCases.ListTestCases.
**/
export class GoogleCloudDialogflowCxV3beta1ListTestCasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=testCases", elemType: shared.GoogleCloudDialogflowCxV3beta1TestCase })
  testCases?: GoogleCloudDialogflowCxV3beta1TestCase[];
}
