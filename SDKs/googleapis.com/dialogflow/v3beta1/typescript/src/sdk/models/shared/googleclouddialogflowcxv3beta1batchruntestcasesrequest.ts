import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest
/** 
 * The request message for TestCases.BatchRunTestCases.
**/
export class GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=testCases" })
  testCases?: string[];
}
