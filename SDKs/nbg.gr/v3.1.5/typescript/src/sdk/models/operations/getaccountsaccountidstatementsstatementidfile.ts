import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountsAccountIdStatementsStatementIdFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=statementId" })
  statementId: string;
}


export class GetAccountsAccountIdStatementsStatementIdFileHeaders extends SpeakeasyBase {
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


export class GetAccountsAccountIdStatementsStatementIdFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  authorizationCodeToken: shared.SchemeAuthorizationCodeToken;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
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
  getAccountsAccountIdStatementsStatementIdFile200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
