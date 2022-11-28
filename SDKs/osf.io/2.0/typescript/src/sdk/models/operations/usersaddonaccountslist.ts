import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UsersAddonAccountsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersAddonAccountsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersAddonAccountsListPathParams;
}


export class UsersAddonAccountsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
