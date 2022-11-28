import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TestCase } from "./googleclouddialogflowcxv3beta1testcase";
/**
 * The response message for TestCases.ListTestCases.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListTestCasesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    testCases?: GoogleCloudDialogflowCxV3beta1TestCase[];
}
