import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UsersAddonAccountsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersAddonAccountsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersAddonAccountsReadPathParams;
}


export class UsersAddonAccountsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
