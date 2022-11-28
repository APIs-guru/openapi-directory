import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountsAccountIdTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class GetAccountsAccountIdTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromBookingDateTime" })
  fromBookingDateTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toBookingDateTime" })
  toBookingDateTime?: Date;
}


export class GetAccountsAccountIdTransactionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=sandbox-id" })
  sandboxId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" })
  xCustomerUserAgent?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" })
  xFapiAuthDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" })
  xFapiCustomerIpAddress?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" })
  xFapiInteractionId?: string;
}


export class GetAccountsAccountIdTransactionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  authorizationCodeToken: shared.SchemeAuthorizationCodeToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class GetAccountsAccountIdTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountsAccountIdTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAccountsAccountIdTransactionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetAccountsAccountIdTransactionsHeaders;

  @SpeakeasyMetadata()
  security: GetAccountsAccountIdTransactionsSecurity;
}


export class GetAccountsAccountIdTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obReadTransaction6?: shared.ObReadTransaction6;

  @SpeakeasyMetadata()
  statusCode: number;
}
