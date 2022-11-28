import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostToolsBulkModifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsBulkModifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postToolsBulkModify200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
