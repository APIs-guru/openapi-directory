import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomesticPaymentConsentsConsentIdPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class GetDomesticPaymentConsentsConsentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetDomesticPaymentConsentsConsentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetDomesticPaymentConsentsConsentIdRequest extends SpeakeasyBase {
    pathParams: GetDomesticPaymentConsentsConsentIdPathParams;
    headers: GetDomesticPaymentConsentsConsentIdHeaders;
    security: GetDomesticPaymentConsentsConsentIdSecurity;
}
export declare class GetDomesticPaymentConsentsConsentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteDomesticConsentResponse5?: shared.ObWriteDomesticConsentResponse5;
    statusCode: number;
}
