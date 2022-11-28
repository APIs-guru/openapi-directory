import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFilePaymentConsentsConsentIdPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class GetFilePaymentConsentsConsentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetFilePaymentConsentsConsentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetFilePaymentConsentsConsentIdRequest extends SpeakeasyBase {
    pathParams: GetFilePaymentConsentsConsentIdPathParams;
    headers: GetFilePaymentConsentsConsentIdHeaders;
    security: GetFilePaymentConsentsConsentIdSecurity;
}
export declare class GetFilePaymentConsentsConsentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteFileConsentResponse4?: shared.ObWriteFileConsentResponse4;
    statusCode: number;
}
