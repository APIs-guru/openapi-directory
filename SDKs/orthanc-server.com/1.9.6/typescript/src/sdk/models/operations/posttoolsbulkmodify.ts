import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostToolsBulkModifyRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsBulkModifyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postToolsBulkModify200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
