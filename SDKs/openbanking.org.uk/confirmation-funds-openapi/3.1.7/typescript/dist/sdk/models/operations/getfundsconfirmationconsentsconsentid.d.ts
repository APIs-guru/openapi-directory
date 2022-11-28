import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFundsConfirmationConsentsConsentIdPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class GetFundsConfirmationConsentsConsentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetFundsConfirmationConsentsConsentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetFundsConfirmationConsentsConsentIdRequest extends SpeakeasyBase {
    pathParams: GetFundsConfirmationConsentsConsentIdPathParams;
    headers: GetFundsConfirmationConsentsConsentIdHeaders;
    security: GetFundsConfirmationConsentsConsentIdSecurity;
}
export declare class GetFundsConfirmationConsentsConsentIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obFundsConfirmationConsentResponse1?: shared.ObFundsConfirmationConsentResponse1;
    statusCode: number;
}
