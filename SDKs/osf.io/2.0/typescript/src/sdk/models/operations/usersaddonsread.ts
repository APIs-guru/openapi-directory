import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UsersAddonsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersAddonsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersAddonsReadPathParams;
}


export class UsersAddonsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
