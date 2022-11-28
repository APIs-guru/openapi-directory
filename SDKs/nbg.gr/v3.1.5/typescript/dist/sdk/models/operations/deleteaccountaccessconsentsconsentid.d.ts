import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAccountAccessConsentsConsentIdPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class DeleteAccountAccessConsentsConsentIdHeaders extends SpeakeasyBase {
    sandboxId: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class DeleteAccountAccessConsentsConsentIdSecurity extends SpeakeasyBase {
    clientCredentialsToken: shared.SchemeClientCredentialsToken;
    clientId: shared.SchemeClientId;
}
export declare class DeleteAccountAccessConsentsConsentIdRequest extends SpeakeasyBase {
    pathParams: DeleteAccountAccessConsentsConsentIdPathParams;
    headers: DeleteAccountAccessConsentsConsentIdHeaders;
    security: DeleteAccountAccessConsentsConsentIdSecurity;
}
export declare class DeleteAccountAccessConsentsConsentIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    statusCode: number;
}
