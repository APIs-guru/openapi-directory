import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const TOPUPACCOUNTBALANCE_SERVERS = [
	"https://rest.nexmo.com",
];



export class TopUpAccountBalanceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;
}


export class TopUpAccountBalanceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: TopUpAccountBalanceQueryParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.TopupRequest;
}


export class TopUpAccountBalanceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  success?: shared.Success;

  @Metadata()
  topUpAccountBalance401ApplicationJsonOneOf?: any;
}
