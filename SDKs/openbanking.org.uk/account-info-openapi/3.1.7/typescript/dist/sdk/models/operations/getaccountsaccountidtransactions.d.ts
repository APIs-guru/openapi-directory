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
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdTransactionsSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetAccountsAccountIdTransactionsRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdTransactionsPathParams;
    queryParams: GetAccountsAccountIdTransactionsQueryParams;
    headers: GetAccountsAccountIdTransactionsHeaders;
    security: GetAccountsAccountIdTransactionsSecurity;
}
export declare class GetAccountsAccountIdTransactionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadTransaction6?: shared.ObReadTransaction6;
    statusCode: number;
}
