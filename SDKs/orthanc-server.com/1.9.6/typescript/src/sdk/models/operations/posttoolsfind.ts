import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostToolsFindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsFindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postToolsFind200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
