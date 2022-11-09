import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostTranslateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: string;
}


export class PostTranslateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
