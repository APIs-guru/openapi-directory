import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest
/** 
 * The request message for TestCases.ImportTestCases.
**/
export class GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=gcsUri" })
  gcsUri?: string;
}
