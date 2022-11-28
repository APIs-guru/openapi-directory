import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED",
    Blob = "BLOB",
    Json = "JSON"
}
/**
 * The request message for TestCases.ExportTestCases.
**/
export declare class GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest extends SpeakeasyBase {
    dataFormat?: GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum;
    filter?: string;
    gcsUri?: string;
}
