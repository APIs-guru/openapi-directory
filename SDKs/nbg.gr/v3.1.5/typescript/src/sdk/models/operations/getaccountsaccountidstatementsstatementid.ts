import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountsAccountIdStatementsStatementIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=statementId" })
  statementId: string;
}


export class GetAccountsAccountIdStatementsStatementIdHeaders extends SpeakeasyBase {
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


export class GetAccountsAccountIdStatementsStatementIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  authorizationCodeToken: shared.SchemeAuthorizationCodeToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class GetAccountsAccountIdStatementsStatementIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountsAccountIdStatementsStatementIdPathParams;

  @SpeakeasyMetadata()
  headers: GetAccountsAccountIdStatementsStatementIdHeaders;

  @SpeakeasyMetadata()
  security: GetAccountsAccountIdStatementsStatementIdSecurity;
}


export class GetAccountsAccountIdStatementsStatementIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obReadStatement2?: shared.ObReadStatement2;

  @SpeakeasyMetadata()
  statusCode: number;
}
