import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3TestCase } from "./googleclouddialogflowcxv3testcase";


// GoogleCloudDialogflowCxV3ListTestCasesResponse
/** 
 * The response message for TestCases.ListTestCases.
**/
export class GoogleCloudDialogflowCxV3ListTestCasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=testCases", elemType: shared.GoogleCloudDialogflowCxV3TestCase })
  testCases?: GoogleCloudDialogflowCxV3TestCase[];
}
