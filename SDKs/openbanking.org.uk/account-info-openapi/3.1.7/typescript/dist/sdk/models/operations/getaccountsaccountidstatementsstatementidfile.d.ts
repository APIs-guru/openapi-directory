import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdStatementsStatementIdFilePathParams extends SpeakeasyBase {
    accountId: string;
    statementId: string;
}
export declare class GetAccountsAccountIdStatementsStatementIdFileHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdStatementsStatementIdFileSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetAccountsAccountIdStatementsStatementIdFileRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdStatementsStatementIdFilePathParams;
    headers: GetAccountsAccountIdStatementsStatementIdFileHeaders;
    security: GetAccountsAccountIdStatementsStatementIdFileSecurity;
}
export declare class GetAccountsAccountIdStatementsStatementIdFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    file?: Map<string, any>;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    statusCode: number;
}
