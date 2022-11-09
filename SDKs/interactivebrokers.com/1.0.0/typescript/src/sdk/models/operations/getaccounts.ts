import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAccountsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=account" })
  account: string;
}


export class GetAccountsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAccountsQueryParams;
}


export class GetAccounts200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts" })
  accounts?: string[];
}


export class GetAccountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAccounts200ApplicationJsonObject?: GetAccounts200ApplicationJson;

  @Metadata()
  statusCode: number;
}
