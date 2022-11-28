import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DownloadModelResponseModelFormatEnum {
    ModelFormatUnspecified = "MODEL_FORMAT_UNSPECIFIED",
    Tflite = "TFLITE"
}


// DownloadModelResponse
/** 
 * The response for downloading a model to device.
**/
export class DownloadModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadUri" })
  downloadUri?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=modelFormat" })
  modelFormat?: DownloadModelResponseModelFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;
}
