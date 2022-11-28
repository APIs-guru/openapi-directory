import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutToolsLogLevelPluginsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PutToolsLogLevelPluginsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
