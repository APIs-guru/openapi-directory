import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostToolsBulkContentRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsBulkContentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
