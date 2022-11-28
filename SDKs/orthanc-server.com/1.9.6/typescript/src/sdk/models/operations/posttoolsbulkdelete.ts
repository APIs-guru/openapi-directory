import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostToolsBulkDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsBulkDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
