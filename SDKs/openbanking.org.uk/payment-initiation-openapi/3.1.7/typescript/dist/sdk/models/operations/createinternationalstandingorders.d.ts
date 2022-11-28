import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateInternationalStandingOrdersHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
    xIdempotencyKey: string;
    xJwsSignature: string;
}
export declare class CreateInternationalStandingOrdersRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    obWriteInternationalStandingOrder4?: shared.ObWriteInternationalStandingOrder4;
    obWriteInternationalStandingOrder5?: shared.ObWriteInternationalStandingOrder4;
}
export declare class CreateInternationalStandingOrdersSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class CreateInternationalStandingOrdersRequest extends SpeakeasyBase {
    headers: CreateInternationalStandingOrdersHeaders;
    request: CreateInternationalStandingOrdersRequests;
    security: CreateInternationalStandingOrdersSecurity;
}
export declare class CreateInternationalStandingOrdersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteInternationalStandingOrderResponse7?: shared.ObWriteInternationalStandingOrderResponse7;
    statusCode: number;
}
