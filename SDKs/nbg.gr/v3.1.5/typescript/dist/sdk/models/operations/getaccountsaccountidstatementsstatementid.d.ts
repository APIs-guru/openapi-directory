import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdStatementsStatementIdPathParams extends SpeakeasyBase {
    accountId: string;
    statementId: string;
}
export declare class GetAccountsAccountIdStatementsStatementIdHeaders extends SpeakeasyBase {
    sandboxId: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdStatementsStatementIdSecurity extends SpeakeasyBase {
    authorizationCodeToken: shared.SchemeAuthorizationCodeToken;
    clientId: shared.SchemeClientId;
}
export declare class GetAccountsAccountIdStatementsStatementIdRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdStatementsStatementIdPathParams;
    headers: GetAccountsAccountIdStatementsStatementIdHeaders;
    security: GetAccountsAccountIdStatementsStatementIdSecurity;
}
export declare class GetAccountsAccountIdStatementsStatementIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadStatement2?: shared.ObReadStatement2;
    statusCode: number;
}
