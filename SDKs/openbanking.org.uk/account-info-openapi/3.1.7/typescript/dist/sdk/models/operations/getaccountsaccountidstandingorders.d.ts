import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdStandingOrdersPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdStandingOrdersHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdStandingOrdersSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetAccountsAccountIdStandingOrdersRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdStandingOrdersPathParams;
    headers: GetAccountsAccountIdStandingOrdersHeaders;
    security: GetAccountsAccountIdStandingOrdersSecurity;
}
export declare class GetAccountsAccountIdStandingOrdersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadStandingOrder6?: shared.ObReadStandingOrder6;
    statusCode: number;
}
