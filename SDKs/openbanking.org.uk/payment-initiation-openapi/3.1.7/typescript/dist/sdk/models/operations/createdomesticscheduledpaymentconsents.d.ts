import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDomesticScheduledPaymentConsentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
    xIdempotencyKey: string;
    xJwsSignature: string;
}
export declare class CreateDomesticScheduledPaymentConsentsRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    obWriteDomesticScheduledConsent4?: shared.ObWriteDomesticScheduledConsent4;
    obWriteDomesticScheduledConsent5?: shared.ObWriteDomesticScheduledConsent4;
}
export declare class CreateDomesticScheduledPaymentConsentsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class CreateDomesticScheduledPaymentConsentsRequest extends SpeakeasyBase {
    headers: CreateDomesticScheduledPaymentConsentsHeaders;
    request: CreateDomesticScheduledPaymentConsentsRequests;
    security: CreateDomesticScheduledPaymentConsentsSecurity;
}
export declare class CreateDomesticScheduledPaymentConsentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteDomesticScheduledConsentResponse5?: shared.ObWriteDomesticScheduledConsentResponse5;
    statusCode: number;
}
