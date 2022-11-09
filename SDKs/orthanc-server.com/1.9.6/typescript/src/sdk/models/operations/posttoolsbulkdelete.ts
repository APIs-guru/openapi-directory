import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostToolsBulkDeleteRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsBulkDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
