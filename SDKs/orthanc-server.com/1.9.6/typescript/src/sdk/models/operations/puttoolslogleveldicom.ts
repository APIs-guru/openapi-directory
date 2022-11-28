import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutToolsLogLevelDicomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PutToolsLogLevelDicomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
