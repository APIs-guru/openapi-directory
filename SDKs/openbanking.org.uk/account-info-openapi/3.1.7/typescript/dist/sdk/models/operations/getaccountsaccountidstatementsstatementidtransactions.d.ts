import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdStatementsStatementIdTransactionsPathParams extends SpeakeasyBase {
    accountId: string;
    statementId: string;
}
export declare class GetAccountsAccountIdStatementsStatementIdTransactionsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdStatementsStatementIdTransactionsSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetAccountsAccountIdStatementsStatementIdTransactionsRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdStatementsStatementIdTransactionsPathParams;
    headers: GetAccountsAccountIdStatementsStatementIdTransactionsHeaders;
    security: GetAccountsAccountIdStatementsStatementIdTransactionsSecurity;
}
export declare class GetAccountsAccountIdStatementsStatementIdTransactionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadTransaction6?: shared.ObReadTransaction6;
    statusCode: number;
}
