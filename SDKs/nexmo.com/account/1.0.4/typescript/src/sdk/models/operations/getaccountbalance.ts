import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETACCOUNTBALANCE_SERVERS = [
	"https://rest.nexmo.com",
];



export class GetAccountBalanceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;
}


export class GetAccountBalanceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: GetAccountBalanceQueryParams;
}


export class GetAccountBalanceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorAuthenticationFailedAccountBalance?: shared.ErrorAuthenticationFailedAccountBalance;

  @Metadata()
  statusCode: number;

  @Metadata()
  accountBalance?: shared.AccountBalance;
}
