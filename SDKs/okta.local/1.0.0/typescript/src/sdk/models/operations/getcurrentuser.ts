import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCurrentUserRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class GetCurrentUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
