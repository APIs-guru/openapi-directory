import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountsAccountIdStatementsStatementIdFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=StatementId" })
  statementId: string;
}


export class GetAccountsAccountIdStatementsStatementIdFileHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" })
  xCustomerUserAgent?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" })
  xFapiAuthDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" })
  xFapiCustomerIpAddress?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" })
  xFapiInteractionId?: string;
}


export class GetAccountsAccountIdStatementsStatementIdFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  psuoAuth2Security: shared.SchemePsuoAuth2Security;
}


export class GetAccountsAccountIdStatementsStatementIdFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountsAccountIdStatementsStatementIdFilePathParams;

  @Metadata()
  headers: GetAccountsAccountIdStatementsStatementIdFileHeaders;

  @Metadata()
  security: GetAccountsAccountIdStatementsStatementIdFileSecurity;
}


export class GetAccountsAccountIdStatementsStatementIdFileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  file?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  statusCode: number;
}
