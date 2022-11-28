import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFundsConfirmationConsentsConsentIdPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class DeleteFundsConfirmationConsentsConsentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class DeleteFundsConfirmationConsentsConsentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class DeleteFundsConfirmationConsentsConsentIdRequest extends SpeakeasyBase {
    pathParams: DeleteFundsConfirmationConsentsConsentIdPathParams;
    headers: DeleteFundsConfirmationConsentsConsentIdHeaders;
    security: DeleteFundsConfirmationConsentsConsentIdSecurity;
}
export declare class DeleteFundsConfirmationConsentsConsentIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    statusCode: number;
}
