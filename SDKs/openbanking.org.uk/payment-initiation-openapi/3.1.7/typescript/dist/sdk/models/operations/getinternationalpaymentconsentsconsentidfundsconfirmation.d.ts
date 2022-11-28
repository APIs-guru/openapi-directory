import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInternationalPaymentConsentsConsentIdFundsConfirmationPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class GetInternationalPaymentConsentsConsentIdFundsConfirmationHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest extends SpeakeasyBase {
    pathParams: GetInternationalPaymentConsentsConsentIdFundsConfirmationPathParams;
    headers: GetInternationalPaymentConsentsConsentIdFundsConfirmationHeaders;
    security: GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity;
}
export declare class GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteFundsConfirmationResponse1?: shared.ObWriteFundsConfirmationResponse1;
    statusCode: number;
}
