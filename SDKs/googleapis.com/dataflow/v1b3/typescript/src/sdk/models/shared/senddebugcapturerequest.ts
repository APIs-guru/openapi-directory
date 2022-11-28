import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SendDebugCaptureRequestDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED",
    Raw = "RAW",
    Json = "JSON",
    Zlib = "ZLIB",
    Brotli = "BROTLI"
}


// SendDebugCaptureRequest
/** 
 * Request to send encoded debug information. Next ID: 8
**/
export class SendDebugCaptureRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentId" })
  componentId?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=dataFormat" })
  dataFormat?: SendDebugCaptureRequestDataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=workerId" })
  workerId?: string;
}
