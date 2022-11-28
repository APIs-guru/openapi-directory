import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutToolsLogLevelGenericRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PutToolsLogLevelGenericResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
