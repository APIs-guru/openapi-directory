import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutToolsDefaultEncodingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PutToolsDefaultEncodingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
