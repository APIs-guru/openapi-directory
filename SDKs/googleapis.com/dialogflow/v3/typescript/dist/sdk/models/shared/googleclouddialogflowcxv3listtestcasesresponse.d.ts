import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TestCase } from "./googleclouddialogflowcxv3testcase";
/**
 * The response message for TestCases.ListTestCases.
**/
export declare class GoogleCloudDialogflowCxV3ListTestCasesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    testCases?: GoogleCloudDialogflowCxV3TestCase[];
}
