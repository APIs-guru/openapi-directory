import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DownloadModelResponseModelFormatEnum {
    ModelFormatUnspecified = "MODEL_FORMAT_UNSPECIFIED",
    Tflite = "TFLITE"
}
/**
 * The response for downloading a model to device.
**/
export declare class DownloadModelResponse extends SpeakeasyBase {
    downloadUri?: string;
    expireTime?: string;
    modelFormat?: DownloadModelResponseModelFormatEnum;
    sizeBytes?: string;
}
