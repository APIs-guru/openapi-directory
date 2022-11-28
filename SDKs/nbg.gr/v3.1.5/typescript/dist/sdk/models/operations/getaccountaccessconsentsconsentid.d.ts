import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountAccessConsentsConsentIdPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class GetAccountAccessConsentsConsentIdHeaders extends SpeakeasyBase {
    sandboxId: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountAccessConsentsConsentIdSecurity extends SpeakeasyBase {
    clientCredentialsToken: shared.SchemeClientCredentialsToken;
    clientId: shared.SchemeClientId;
}
export declare class GetAccountAccessConsentsConsentIdRequest extends SpeakeasyBase {
    pathParams: GetAccountAccessConsentsConsentIdPathParams;
    headers: GetAccountAccessConsentsConsentIdHeaders;
    security: GetAccountAccessConsentsConsentIdSecurity;
}
export declare class GetAccountAccessConsentsConsentIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadConsentResponse1?: shared.ObReadConsentResponse1;
    statusCode: number;
}
