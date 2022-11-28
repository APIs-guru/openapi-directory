import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDomesticStandingOrdersHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
    xIdempotencyKey: string;
    xJwsSignature: string;
}
export declare class CreateDomesticStandingOrdersRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    obWriteDomesticStandingOrder3?: shared.ObWriteDomesticStandingOrder3;
    obWriteDomesticStandingOrder4?: shared.ObWriteDomesticStandingOrder3;
}
export declare class CreateDomesticStandingOrdersSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class CreateDomesticStandingOrdersRequest extends SpeakeasyBase {
    headers: CreateDomesticStandingOrdersHeaders;
    request: CreateDomesticStandingOrdersRequests;
    security: CreateDomesticStandingOrdersSecurity;
}
export declare class CreateDomesticStandingOrdersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteDomesticStandingOrderResponse6?: shared.ObWriteDomesticStandingOrderResponse6;
    statusCode: number;
}
