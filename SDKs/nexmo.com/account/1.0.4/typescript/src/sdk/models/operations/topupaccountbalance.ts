import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const TopUpAccountBalanceServerList = [
	"https://rest.nexmo.com",
] as const;


export class TopUpAccountBalanceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;
}


export class TopUpAccountBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: TopUpAccountBalanceQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.TopupRequest;
}


export class TopUpAccountBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  success?: shared.Success;

  @SpeakeasyMetadata()
  topUpAccountBalance401ApplicationJsonOneOf?: any;
}
