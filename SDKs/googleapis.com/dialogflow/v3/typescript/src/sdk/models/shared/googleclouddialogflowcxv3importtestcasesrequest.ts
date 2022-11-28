import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3ImportTestCasesRequest
/** 
 * The request message for TestCases.ImportTestCases.
**/
export class GoogleCloudDialogflowCxV3ImportTestCasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsUri" })
  gcsUri?: string;
}
