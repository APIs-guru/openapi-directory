import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest
/** 
 * The request message for TestCases.BatchDeleteTestCases.
**/
export class GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: string[];
}
