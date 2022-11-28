import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SendDebugCaptureRequestDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED",
    Raw = "RAW",
    Json = "JSON",
    Zlib = "ZLIB",
    Brotli = "BROTLI"
}
/**
 * Request to send encoded debug information. Next ID: 8
**/
export declare class SendDebugCaptureRequest extends SpeakeasyBase {
    componentId?: string;
    data?: string;
    dataFormat?: SendDebugCaptureRequestDataFormatEnum;
    location?: string;
    workerId?: string;
}
