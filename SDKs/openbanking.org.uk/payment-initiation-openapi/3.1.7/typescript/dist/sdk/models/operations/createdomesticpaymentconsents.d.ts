import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDomesticPaymentConsentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
    xIdempotencyKey: string;
    xJwsSignature: string;
}
export declare class CreateDomesticPaymentConsentsRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    obWriteDomesticConsent4?: shared.ObWriteDomesticConsent4;
    obWriteDomesticConsent5?: shared.ObWriteDomesticConsent4;
}
export declare class CreateDomesticPaymentConsentsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class CreateDomesticPaymentConsentsRequest extends SpeakeasyBase {
    headers: CreateDomesticPaymentConsentsHeaders;
    request: CreateDomesticPaymentConsentsRequests;
    security: CreateDomesticPaymentConsentsSecurity;
}
export declare class CreateDomesticPaymentConsentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteDomesticConsentResponse5?: shared.ObWriteDomesticConsentResponse5;
    statusCode: number;
}
