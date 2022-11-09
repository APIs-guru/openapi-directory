import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostToolsBulkAnonymizeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsBulkAnonymizeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postToolsBulkAnonymize200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
