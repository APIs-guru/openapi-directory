import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFilePaymentConsentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
    xIdempotencyKey: string;
    xJwsSignature: string;
}
export declare class CreateFilePaymentConsentsRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    obWriteFileConsent3?: shared.ObWriteFileConsent3;
    obWriteFileConsent4?: shared.ObWriteFileConsent3;
}
export declare class CreateFilePaymentConsentsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class CreateFilePaymentConsentsRequest extends SpeakeasyBase {
    headers: CreateFilePaymentConsentsHeaders;
    request: CreateFilePaymentConsentsRequests;
    security: CreateFilePaymentConsentsSecurity;
}
export declare class CreateFilePaymentConsentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteFileConsentResponse4?: shared.ObWriteFileConsentResponse4;
    statusCode: number;
}
