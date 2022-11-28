import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomesticScheduledPaymentConsentsConsentIdPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class GetDomesticScheduledPaymentConsentsConsentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetDomesticScheduledPaymentConsentsConsentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetDomesticScheduledPaymentConsentsConsentIdRequest extends SpeakeasyBase {
    pathParams: GetDomesticScheduledPaymentConsentsConsentIdPathParams;
    headers: GetDomesticScheduledPaymentConsentsConsentIdHeaders;
    security: GetDomesticScheduledPaymentConsentsConsentIdSecurity;
}
export declare class GetDomesticScheduledPaymentConsentsConsentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteDomesticScheduledConsentResponse5?: shared.ObWriteDomesticScheduledConsentResponse5;
    statusCode: number;
}
