import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostToolsCreateArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsCreateArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postToolsCreateArchive200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
