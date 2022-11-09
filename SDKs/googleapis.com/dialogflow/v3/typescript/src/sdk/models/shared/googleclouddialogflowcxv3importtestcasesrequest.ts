import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3ImportTestCasesRequest
/** 
 * The request message for TestCases.ImportTestCases.
**/
export class GoogleCloudDialogflowCxV3ImportTestCasesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=gcsUri" })
  gcsUri?: string;
}
