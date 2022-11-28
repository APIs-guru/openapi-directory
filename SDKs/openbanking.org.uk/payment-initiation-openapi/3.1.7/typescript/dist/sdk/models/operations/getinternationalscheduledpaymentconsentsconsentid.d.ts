import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInternationalScheduledPaymentConsentsConsentIdPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class GetInternationalScheduledPaymentConsentsConsentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetInternationalScheduledPaymentConsentsConsentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetInternationalScheduledPaymentConsentsConsentIdRequest extends SpeakeasyBase {
    pathParams: GetInternationalScheduledPaymentConsentsConsentIdPathParams;
    headers: GetInternationalScheduledPaymentConsentsConsentIdHeaders;
    security: GetInternationalScheduledPaymentConsentsConsentIdSecurity;
}
export declare class GetInternationalScheduledPaymentConsentsConsentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteInternationalScheduledConsentResponse6?: shared.ObWriteInternationalScheduledConsentResponse6;
    statusCode: number;
}
