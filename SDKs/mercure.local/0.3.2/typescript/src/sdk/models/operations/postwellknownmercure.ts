import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostWellKnownMercureRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: any;
}


export class PostWellKnownMercureResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
