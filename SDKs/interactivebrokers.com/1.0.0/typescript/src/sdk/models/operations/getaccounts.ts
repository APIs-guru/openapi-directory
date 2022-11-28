import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account" })
  account: string;
}


export class GetAccounts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts" })
  accounts?: string[];
}


export class GetAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAccountsQueryParams;
}


export class GetAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAccounts200ApplicationJsonObject?: GetAccounts200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
