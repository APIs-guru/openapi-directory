import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateInternationalPaymentConsentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
    xIdempotencyKey: string;
    xJwsSignature: string;
}
export declare class CreateInternationalPaymentConsentsRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    obWriteInternationalConsent5?: shared.ObWriteInternationalConsent5;
    obWriteInternationalConsent6?: shared.ObWriteInternationalConsent5;
}
export declare class CreateInternationalPaymentConsentsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class CreateInternationalPaymentConsentsRequest extends SpeakeasyBase {
    headers: CreateInternationalPaymentConsentsHeaders;
    request: CreateInternationalPaymentConsentsRequests;
    security: CreateInternationalPaymentConsentsSecurity;
}
export declare class CreateInternationalPaymentConsentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteInternationalConsentResponse6?: shared.ObWriteInternationalConsentResponse6;
    statusCode: number;
}
