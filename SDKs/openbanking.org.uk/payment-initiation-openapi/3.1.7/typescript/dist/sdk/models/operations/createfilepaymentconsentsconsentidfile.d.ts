import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFilePaymentConsentsConsentIdFilePathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class CreateFilePaymentConsentsConsentIdFileHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
    xIdempotencyKey: string;
    xJwsSignature: string;
}
export declare class CreateFilePaymentConsentsConsentIdFileRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    file?: Map<string, any>;
    file1?: Map<string, any>;
}
export declare class CreateFilePaymentConsentsConsentIdFileSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class CreateFilePaymentConsentsConsentIdFileRequest extends SpeakeasyBase {
    pathParams: CreateFilePaymentConsentsConsentIdFilePathParams;
    headers: CreateFilePaymentConsentsConsentIdFileHeaders;
    request: CreateFilePaymentConsentsConsentIdFileRequests;
    security: CreateFilePaymentConsentsConsentIdFileSecurity;
}
export declare class CreateFilePaymentConsentsConsentIdFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    statusCode: number;
}
