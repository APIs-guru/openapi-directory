import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostToolsCreateArchiveRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsCreateArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  postToolsCreateArchive200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
