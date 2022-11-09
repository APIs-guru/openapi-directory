import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DownloadModelResponseModelFormatEnum {
    ModelFormatUnspecified = "MODEL_FORMAT_UNSPECIFIED"
,    Tflite = "TFLITE"
}


// DownloadModelResponse
/** 
 * The response for downloading a model to device.
**/
export class DownloadModelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadUri" })
  downloadUri?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=modelFormat" })
  modelFormat?: DownloadModelResponseModelFormatEnum;

  @Metadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;
}
