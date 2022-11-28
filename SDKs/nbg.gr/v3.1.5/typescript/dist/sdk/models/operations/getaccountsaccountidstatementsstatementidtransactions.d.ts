import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdStatementsStatementIdTransactionsPathParams extends SpeakeasyBase {
    accountId: string;
    statementId: string;
}
export declare class GetAccountsAccountIdStatementsStatementIdTransactionsHeaders extends SpeakeasyBase {
    sandboxId: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdStatementsStatementIdTransactionsSecurity extends SpeakeasyBase {
    authorizationCodeToken: shared.SchemeAuthorizationCodeToken;
    clientId: shared.SchemeClientId;
}
export declare class GetAccountsAccountIdStatementsStatementIdTransactionsRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdStatementsStatementIdTransactionsPathParams;
    headers: GetAccountsAccountIdStatementsStatementIdTransactionsHeaders;
    security: GetAccountsAccountIdStatementsStatementIdTransactionsSecurity;
}
export declare class GetAccountsAccountIdStatementsStatementIdTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadTransaction6?: shared.ObReadTransaction6;
    statusCode: number;
}
