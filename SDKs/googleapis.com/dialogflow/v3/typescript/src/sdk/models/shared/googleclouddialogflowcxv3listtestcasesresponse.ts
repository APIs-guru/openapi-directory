import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TestCase } from "./googleclouddialogflowcxv3testcase";



// GoogleCloudDialogflowCxV3ListTestCasesResponse
/** 
 * The response message for TestCases.ListTestCases.
**/
export class GoogleCloudDialogflowCxV3ListTestCasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=testCases", elemType: GoogleCloudDialogflowCxV3TestCase })
  testCases?: GoogleCloudDialogflowCxV3TestCase[];
}
