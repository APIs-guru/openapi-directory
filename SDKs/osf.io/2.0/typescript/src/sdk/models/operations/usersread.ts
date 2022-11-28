import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UsersReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersReadPathParams;
}


export class UsersReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
