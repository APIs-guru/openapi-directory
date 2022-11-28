import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdStatementsStatementIdFilePathParams extends SpeakeasyBase {
    accountId: string;
    statementId: string;
}
export declare class GetAccountsAccountIdStatementsStatementIdFileHeaders extends SpeakeasyBase {
    sandboxId: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdStatementsStatementIdFileSecurity extends SpeakeasyBase {
    authorizationCodeToken: shared.SchemeAuthorizationCodeToken;
    clientId: shared.SchemeClientId;
}
export declare class GetAccountsAccountIdStatementsStatementIdFileRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdStatementsStatementIdFilePathParams;
    headers: GetAccountsAccountIdStatementsStatementIdFileHeaders;
    security: GetAccountsAccountIdStatementsStatementIdFileSecurity;
}
export declare class GetAccountsAccountIdStatementsStatementIdFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getAccountsAccountIdStatementsStatementIdFile200ApplicationPdfBinaryString?: Uint8Array;
    headers: Map<string, string[]>;
    statusCode: number;
}
