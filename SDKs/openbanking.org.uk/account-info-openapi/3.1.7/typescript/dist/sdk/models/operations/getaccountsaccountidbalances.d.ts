import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdBalancesPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdBalancesHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdBalancesSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetAccountsAccountIdBalancesRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdBalancesPathParams;
    headers: GetAccountsAccountIdBalancesHeaders;
    security: GetAccountsAccountIdBalancesSecurity;
}
export declare class GetAccountsAccountIdBalancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadBalance1?: shared.ObReadBalance1;
    statusCode: number;
}
