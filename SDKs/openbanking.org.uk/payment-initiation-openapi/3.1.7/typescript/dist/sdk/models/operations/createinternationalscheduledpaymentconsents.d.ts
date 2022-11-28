import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateInternationalScheduledPaymentConsentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
    xIdempotencyKey: string;
    xJwsSignature: string;
}
export declare class CreateInternationalScheduledPaymentConsentsRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    obWriteInternationalScheduledConsent5?: shared.ObWriteInternationalScheduledConsent5;
    obWriteInternationalScheduledConsent6?: shared.ObWriteInternationalScheduledConsent5;
}
export declare class CreateInternationalScheduledPaymentConsentsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class CreateInternationalScheduledPaymentConsentsRequest extends SpeakeasyBase {
    headers: CreateInternationalScheduledPaymentConsentsHeaders;
    request: CreateInternationalScheduledPaymentConsentsRequests;
    security: CreateInternationalScheduledPaymentConsentsSecurity;
}
export declare class CreateInternationalScheduledPaymentConsentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteInternationalScheduledConsentResponse6?: shared.ObWriteInternationalScheduledConsentResponse6;
    statusCode: number;
}
