import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnlockUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UnlockUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnlockUserPathParams;

  @Metadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class UnlockUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
