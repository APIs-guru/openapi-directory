import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdTransactionsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdTransactionsQueryParams extends SpeakeasyBase {
    fromBookingDateTime?: Date;
    toBookingDateTime?: Date;
}
export declare class GetAccountsAccountIdTransactionsHeaders extends SpeakeasyBase {
    sandboxId: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdTransactionsSecurity extends SpeakeasyBase {
    authorizationCodeToken: shared.SchemeAuthorizationCodeToken;
    clientId: shared.SchemeClientId;
}
export declare class GetAccountsAccountIdTransactionsRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdTransactionsPathParams;
    queryParams: GetAccountsAccountIdTransactionsQueryParams;
    headers: GetAccountsAccountIdTransactionsHeaders;
    security: GetAccountsAccountIdTransactionsSecurity;
}
export declare class GetAccountsAccountIdTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadTransaction6?: shared.ObReadTransaction6;
    statusCode: number;
}
