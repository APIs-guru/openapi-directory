import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UsersAddonsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersAddonsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersAddonsListPathParams;
}


export class UsersAddonsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
