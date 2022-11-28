import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeactivateUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeactivateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeactivateUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class DeactivateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
