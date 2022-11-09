import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostToolsLookupRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PostToolsLookupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postToolsLookup200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
