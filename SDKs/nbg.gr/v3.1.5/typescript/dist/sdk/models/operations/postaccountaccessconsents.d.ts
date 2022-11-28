import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAccountAccessConsentsHeaders extends SpeakeasyBase {
    sandboxId: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class PostAccountAccessConsentsRequests extends SpeakeasyBase {
    obReadConsent1?: shared.ObReadConsent1;
    obReadConsent2?: shared.ObReadConsent1;
}
export declare class PostAccountAccessConsentsSecurity extends SpeakeasyBase {
    clientCredentialsToken: shared.SchemeClientCredentialsToken;
    clientId: shared.SchemeClientId;
}
export declare class PostAccountAccessConsentsRequest extends SpeakeasyBase {
    headers: PostAccountAccessConsentsHeaders;
    request?: PostAccountAccessConsentsRequests;
    security: PostAccountAccessConsentsSecurity;
}
export declare class PostAccountAccessConsentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadConsentResponse1?: shared.ObReadConsentResponse1;
    statusCode: number;
}
