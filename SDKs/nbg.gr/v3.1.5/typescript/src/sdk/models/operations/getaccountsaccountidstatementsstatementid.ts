import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountsAccountIdStatementsStatementIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=statementId" })
  statementId: string;
}


export class GetAccountsAccountIdStatementsStatementIdHeaders extends SpeakeasyBase {
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


export class GetAccountsAccountIdStatementsStatementIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  authorizationCodeToken: shared.SchemeAuthorizationCodeToken;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class GetAccountsAccountIdStatementsStatementIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountsAccountIdStatementsStatementIdPathParams;

  @Metadata()
  headers: GetAccountsAccountIdStatementsStatementIdHeaders;

  @Metadata()
  security: GetAccountsAccountIdStatementsStatementIdSecurity;
}


export class GetAccountsAccountIdStatementsStatementIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obReadStatement2?: shared.ObReadStatement2;

  @Metadata()
  statusCode: number;
}
