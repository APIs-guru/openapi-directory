import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInternationalPaymentConsentsConsentIdPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class GetInternationalPaymentConsentsConsentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetInternationalPaymentConsentsConsentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetInternationalPaymentConsentsConsentIdRequest extends SpeakeasyBase {
    pathParams: GetInternationalPaymentConsentsConsentIdPathParams;
    headers: GetInternationalPaymentConsentsConsentIdHeaders;
    security: GetInternationalPaymentConsentsConsentIdSecurity;
}
export declare class GetInternationalPaymentConsentsConsentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteInternationalConsentResponse6?: shared.ObWriteInternationalConsentResponse6;
    statusCode: number;
}
