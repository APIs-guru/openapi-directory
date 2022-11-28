import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostToolsCreateMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsCreateMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postToolsCreateMedia200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
