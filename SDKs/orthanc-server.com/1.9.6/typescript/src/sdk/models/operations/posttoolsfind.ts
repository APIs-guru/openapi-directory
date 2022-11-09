import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostToolsFindRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsFindResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postToolsFind200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
