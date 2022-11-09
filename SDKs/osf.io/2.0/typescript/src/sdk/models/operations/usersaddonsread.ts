import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UsersAddonsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersAddonsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersAddonsReadPathParams;
}


export class UsersAddonsReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
