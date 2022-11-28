import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostWellKnownMercureRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: any;
}


export class PostWellKnownMercureResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
