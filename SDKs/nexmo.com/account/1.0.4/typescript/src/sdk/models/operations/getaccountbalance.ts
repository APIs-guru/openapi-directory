import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const GetAccountBalanceServerList = [
	"https://rest.nexmo.com",
] as const;


export class GetAccountBalanceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;
}


export class GetAccountBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: GetAccountBalanceQueryParams;
}


export class GetAccountBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorAuthenticationFailedAccountBalance?: shared.ErrorAuthenticationFailedAccountBalance;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountBalance?: shared.AccountBalance;
}
