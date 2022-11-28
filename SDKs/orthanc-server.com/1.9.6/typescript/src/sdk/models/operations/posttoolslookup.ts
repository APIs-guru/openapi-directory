import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostToolsLookupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PostToolsLookupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postToolsLookup200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
