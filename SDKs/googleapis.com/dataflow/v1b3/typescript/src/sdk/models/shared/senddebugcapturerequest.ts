import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SendDebugCaptureRequestDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED"
,    Raw = "RAW"
,    Json = "JSON"
,    Zlib = "ZLIB"
,    Brotli = "BROTLI"
}


// SendDebugCaptureRequest
/** 
 * Request to send encoded debug information. Next ID: 8
**/
export class SendDebugCaptureRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentId" })
  componentId?: string;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=dataFormat" })
  dataFormat?: SendDebugCaptureRequestDataFormatEnum;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=workerId" })
  workerId?: string;
}
