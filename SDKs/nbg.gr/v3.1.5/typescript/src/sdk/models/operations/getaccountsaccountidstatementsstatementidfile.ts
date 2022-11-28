import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountsAccountIdStatementsStatementIdFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=statementId" })
  statementId: string;
}


export class GetAccountsAccountIdStatementsStatementIdFileHeaders extends SpeakeasyBase {
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


export class GetAccountsAccountIdStatementsStatementIdFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  authorizationCodeToken: shared.SchemeAuthorizationCodeToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class GetAccountsAccountIdStatementsStatementIdFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountsAccountIdStatementsStatementIdFilePathParams;

  @SpeakeasyMetadata()
  headers: GetAccountsAccountIdStatementsStatementIdFileHeaders;

  @SpeakeasyMetadata()
  security: GetAccountsAccountIdStatementsStatementIdFileSecurity;
}


export class GetAccountsAccountIdStatementsStatementIdFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAccountsAccountIdStatementsStatementIdFile200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
