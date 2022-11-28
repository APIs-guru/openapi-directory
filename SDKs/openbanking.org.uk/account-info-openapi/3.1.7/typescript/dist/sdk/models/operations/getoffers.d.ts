import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOffersHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetOffersSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetOffersRequest extends SpeakeasyBase {
    headers: GetOffersHeaders;
    security: GetOffersSecurity;
}
export declare class GetOffersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadOffer1?: shared.ObReadOffer1;
    statusCode: number;
}
