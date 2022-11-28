import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAccountAccessConsentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class CreateAccountAccessConsentsRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    obReadConsent1?: shared.ObReadConsent1;
    obReadConsent2?: shared.ObReadConsent1;
}
export declare class CreateAccountAccessConsentsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class CreateAccountAccessConsentsRequest extends SpeakeasyBase {
    headers: CreateAccountAccessConsentsHeaders;
    request: CreateAccountAccessConsentsRequests;
    security: CreateAccountAccessConsentsSecurity;
}
export declare class CreateAccountAccessConsentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadConsentResponse1?: shared.ObReadConsentResponse1;
    statusCode: number;
}
