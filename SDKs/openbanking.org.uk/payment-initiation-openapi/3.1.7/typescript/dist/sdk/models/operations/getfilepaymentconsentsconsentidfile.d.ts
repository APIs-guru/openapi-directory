import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFilePaymentConsentsConsentIdFilePathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class GetFilePaymentConsentsConsentIdFileHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetFilePaymentConsentsConsentIdFileSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetFilePaymentConsentsConsentIdFileRequest extends SpeakeasyBase {
    pathParams: GetFilePaymentConsentsConsentIdFilePathParams;
    headers: GetFilePaymentConsentsConsentIdFileHeaders;
    security: GetFilePaymentConsentsConsentIdFileSecurity;
}
export declare class GetFilePaymentConsentsConsentIdFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    file?: Map<string, any>;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    statusCode: number;
}
