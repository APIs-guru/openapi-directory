import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeactivateUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeactivateUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeactivateUserPathParams;

  @Metadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class DeactivateUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
