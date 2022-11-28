import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TestCase } from "./googleclouddialogflowcxv3beta1testcase";



// GoogleCloudDialogflowCxV3beta1ListTestCasesResponse
/** 
 * The response message for TestCases.ListTestCases.
**/
export class GoogleCloudDialogflowCxV3beta1ListTestCasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=testCases", elemType: GoogleCloudDialogflowCxV3beta1TestCase })
  testCases?: GoogleCloudDialogflowCxV3beta1TestCase[];
}
