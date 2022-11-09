import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TestCase } from "./testcase";


// ListTestCasesResponse
/** 
 * Response message for StepService.ListTestCases.
**/
export class ListTestCasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=testCases", elemType: shared.TestCase })
  testCases?: TestCase[];
}
