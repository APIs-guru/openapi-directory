import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3BatchDeleteTestCasesRequest
/** 
 * The request message for TestCases.BatchDeleteTestCases.
**/
export class GoogleCloudDialogflowCxV3BatchDeleteTestCasesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=names" })
  names?: string[];
}
