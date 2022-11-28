import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostToolsCreateMediaExtendedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsCreateMediaExtendedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postToolsCreateMediaExtended200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
