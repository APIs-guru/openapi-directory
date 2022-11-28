import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3BatchDeleteTestCasesRequest
/** 
 * The request message for TestCases.BatchDeleteTestCases.
**/
export class GoogleCloudDialogflowCxV3BatchDeleteTestCasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: string[];
}
