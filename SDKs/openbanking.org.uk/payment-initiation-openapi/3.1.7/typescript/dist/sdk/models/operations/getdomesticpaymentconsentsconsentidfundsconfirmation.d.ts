import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomesticPaymentConsentsConsentIdFundsConfirmationPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class GetDomesticPaymentConsentsConsentIdFundsConfirmationHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetDomesticPaymentConsentsConsentIdFundsConfirmationSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest extends SpeakeasyBase {
    pathParams: GetDomesticPaymentConsentsConsentIdFundsConfirmationPathParams;
    headers: GetDomesticPaymentConsentsConsentIdFundsConfirmationHeaders;
    security: GetDomesticPaymentConsentsConsentIdFundsConfirmationSecurity;
}
export declare class GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteFundsConfirmationResponse1?: shared.ObWriteFundsConfirmationResponse1;
    statusCode: number;
}
