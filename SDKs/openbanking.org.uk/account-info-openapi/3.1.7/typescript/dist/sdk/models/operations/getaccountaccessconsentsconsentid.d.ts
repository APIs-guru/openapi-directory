import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountAccessConsentsConsentIdPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class GetAccountAccessConsentsConsentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountAccessConsentsConsentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetAccountAccessConsentsConsentIdRequest extends SpeakeasyBase {
    pathParams: GetAccountAccessConsentsConsentIdPathParams;
    headers: GetAccountAccessConsentsConsentIdHeaders;
    security: GetAccountAccessConsentsConsentIdSecurity;
}
export declare class GetAccountAccessConsentsConsentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadConsentResponse1?: shared.ObReadConsentResponse1;
    statusCode: number;
}
