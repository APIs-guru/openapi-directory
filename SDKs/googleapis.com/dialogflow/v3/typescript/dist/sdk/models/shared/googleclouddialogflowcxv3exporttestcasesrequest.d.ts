import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED",
    Blob = "BLOB",
    Json = "JSON"
}
/**
 * The request message for TestCases.ExportTestCases.
**/
export declare class GoogleCloudDialogflowCxV3ExportTestCasesRequest extends SpeakeasyBase {
    dataFormat?: GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum;
    filter?: string;
    gcsUri?: string;
}
