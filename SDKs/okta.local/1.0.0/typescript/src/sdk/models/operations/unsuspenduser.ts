import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnsuspendUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UnsuspendUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnsuspendUserPathParams;

  @Metadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class UnsuspendUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
