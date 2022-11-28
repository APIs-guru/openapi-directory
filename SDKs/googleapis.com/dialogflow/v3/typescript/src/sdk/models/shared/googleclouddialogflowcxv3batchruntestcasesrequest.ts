import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3BatchRunTestCasesRequest
/** 
 * The request message for TestCases.BatchRunTestCases.
**/
export class GoogleCloudDialogflowCxV3BatchRunTestCasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=testCases" })
  testCases?: string[];
}
