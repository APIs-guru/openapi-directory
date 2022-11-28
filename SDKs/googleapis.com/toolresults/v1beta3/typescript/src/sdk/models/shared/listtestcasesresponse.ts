import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestCase } from "./testcase";



// ListTestCasesResponse
/** 
 * Response message for StepService.ListTestCases.
**/
export class ListTestCasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=testCases", elemType: TestCase })
  testCases?: TestCase[];
}
