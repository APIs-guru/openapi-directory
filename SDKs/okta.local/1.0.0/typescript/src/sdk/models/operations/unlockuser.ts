import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnlockUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UnlockUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnlockUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class UnlockUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
