import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostToolsBulkAnonymizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsBulkAnonymizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postToolsBulkAnonymize200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
