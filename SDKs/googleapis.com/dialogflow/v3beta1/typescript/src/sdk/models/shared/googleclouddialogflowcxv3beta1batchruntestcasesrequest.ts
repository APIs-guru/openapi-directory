import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest
/** 
 * The request message for TestCases.BatchRunTestCases.
**/
export class GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=testCases" })
  testCases?: string[];
}
