import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostToolsCreateMediaRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsCreateMediaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  postToolsCreateMedia200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
