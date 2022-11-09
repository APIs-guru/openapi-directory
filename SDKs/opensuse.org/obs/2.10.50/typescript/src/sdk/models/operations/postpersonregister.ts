import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPersonRegisterRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;
}


export class PostPersonRegisterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
