import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdStatementsStatementIdPathParams extends SpeakeasyBase {
    accountId: string;
    statementId: string;
}
export declare class GetAccountsAccountIdStatementsStatementIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdStatementsStatementIdSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetAccountsAccountIdStatementsStatementIdRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdStatementsStatementIdPathParams;
    headers: GetAccountsAccountIdStatementsStatementIdHeaders;
    security: GetAccountsAccountIdStatementsStatementIdSecurity;
}
export declare class GetAccountsAccountIdStatementsStatementIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadStatement2?: shared.ObReadStatement2;
    statusCode: number;
}
