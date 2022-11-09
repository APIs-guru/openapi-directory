import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest
/** 
 * The request message for TestCases.BatchDeleteTestCases.
**/
export class GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=names" })
  names?: string[];
}
