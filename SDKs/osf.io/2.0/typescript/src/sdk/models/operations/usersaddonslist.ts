import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UsersAddonsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersAddonsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersAddonsListPathParams;
}


export class UsersAddonsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
