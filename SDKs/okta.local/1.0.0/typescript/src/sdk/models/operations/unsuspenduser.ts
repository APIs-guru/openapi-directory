import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnsuspendUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UnsuspendUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnsuspendUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class UnsuspendUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
