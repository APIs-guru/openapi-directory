import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest extends SpeakeasyBase {
    pathParams: GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationPathParams;
    headers: GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders;
    security: GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity;
}
export declare class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteFundsConfirmationResponse1?: shared.ObWriteFundsConfirmationResponse1;
    statusCode: number;
}
