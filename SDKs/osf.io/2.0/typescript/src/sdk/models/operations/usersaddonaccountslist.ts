import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UsersAddonAccountsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersAddonAccountsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersAddonAccountsListPathParams;
}


export class UsersAddonAccountsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
