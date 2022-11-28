import { SpeakeasyBase } from "../../../internal/utils";
import { TestCase } from "./testcase";
/**
 * Response message for StepService.ListTestCases.
**/
export declare class ListTestCasesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    testCases?: TestCase[];
}
