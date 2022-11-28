import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFundsConfirmationConsentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class CreateFundsConfirmationConsentsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class CreateFundsConfirmationConsentsRequest extends SpeakeasyBase {
    headers: CreateFundsConfirmationConsentsHeaders;
    request: shared.ObFundsConfirmationConsent1;
    security: CreateFundsConfirmationConsentsSecurity;
}
export declare class CreateFundsConfirmationConsentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obFundsConfirmationConsentResponse1?: shared.ObFundsConfirmationConsentResponse1;
    statusCode: number;
}
