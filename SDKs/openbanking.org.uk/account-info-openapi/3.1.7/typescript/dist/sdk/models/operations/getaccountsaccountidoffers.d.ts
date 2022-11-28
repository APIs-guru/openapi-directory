import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdOffersPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdOffersHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdOffersSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetAccountsAccountIdOffersRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdOffersPathParams;
    headers: GetAccountsAccountIdOffersHeaders;
    security: GetAccountsAccountIdOffersSecurity;
}
export declare class GetAccountsAccountIdOffersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadOffer1?: shared.ObReadOffer1;
    statusCode: number;
}
