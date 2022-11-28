import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutToolsLogLevelHttpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PutToolsLogLevelHttpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
