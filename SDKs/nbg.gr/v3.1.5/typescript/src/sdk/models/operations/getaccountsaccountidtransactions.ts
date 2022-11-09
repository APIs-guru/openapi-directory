import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountsAccountIdTransactionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class GetAccountsAccountIdTransactionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fromBookingDateTime" })
  fromBookingDateTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toBookingDateTime" })
  toBookingDateTime?: Date;
}


export class GetAccountsAccountIdTransactionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=sandbox-id" })
  sandboxId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" })
  xCustomerUserAgent?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" })
  xFapiAuthDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" })
  xFapiCustomerIpAddress?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" })
  xFapiInteractionId?: string;
}


export class GetAccountsAccountIdTransactionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  authorizationCodeToken: shared.SchemeAuthorizationCodeToken;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class GetAccountsAccountIdTransactionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountsAccountIdTransactionsPathParams;

  @Metadata()
  queryParams: GetAccountsAccountIdTransactionsQueryParams;

  @Metadata()
  headers: GetAccountsAccountIdTransactionsHeaders;

  @Metadata()
  security: GetAccountsAccountIdTransactionsSecurity;
}


export class GetAccountsAccountIdTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obReadTransaction6?: shared.ObReadTransaction6;

  @Metadata()
  statusCode: number;
}
