import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdStatementsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdStatementsQueryParams extends SpeakeasyBase {
    fromStatementDateTime?: Date;
    toStatementDateTime?: Date;
}
export declare class GetAccountsAccountIdStatementsHeaders extends SpeakeasyBase {
    sandboxId: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdStatementsSecurity extends SpeakeasyBase {
    authorizationCodeToken: shared.SchemeAuthorizationCodeToken;
    clientId: shared.SchemeClientId;
}
export declare class GetAccountsAccountIdStatementsRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdStatementsPathParams;
    queryParams: GetAccountsAccountIdStatementsQueryParams;
    headers: GetAccountsAccountIdStatementsHeaders;
    security: GetAccountsAccountIdStatementsSecurity;
}
export declare class GetAccountsAccountIdStatementsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadStatement2?: shared.ObReadStatement2;
    statusCode: number;
}
