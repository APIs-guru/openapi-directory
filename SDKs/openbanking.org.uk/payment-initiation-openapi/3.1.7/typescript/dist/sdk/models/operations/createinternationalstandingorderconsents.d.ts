import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateInternationalStandingOrderConsentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
    xIdempotencyKey: string;
    xJwsSignature: string;
}
export declare class CreateInternationalStandingOrderConsentsRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    obWriteInternationalStandingOrderConsent6?: shared.ObWriteInternationalStandingOrderConsent6;
    obWriteInternationalStandingOrderConsent7?: shared.ObWriteInternationalStandingOrderConsent6;
}
export declare class CreateInternationalStandingOrderConsentsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class CreateInternationalStandingOrderConsentsRequest extends SpeakeasyBase {
    headers: CreateInternationalStandingOrderConsentsHeaders;
    request: CreateInternationalStandingOrderConsentsRequests;
    security: CreateInternationalStandingOrderConsentsSecurity;
}
export declare class CreateInternationalStandingOrderConsentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteInternationalStandingOrderConsentResponse7?: shared.ObWriteInternationalStandingOrderConsentResponse7;
    statusCode: number;
}
