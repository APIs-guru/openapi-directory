import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UsersAddonAccountsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersAddonAccountsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersAddonAccountsReadPathParams;
}


export class UsersAddonAccountsReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
