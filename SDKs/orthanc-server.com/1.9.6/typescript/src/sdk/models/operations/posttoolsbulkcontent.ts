import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostToolsBulkContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsBulkContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
