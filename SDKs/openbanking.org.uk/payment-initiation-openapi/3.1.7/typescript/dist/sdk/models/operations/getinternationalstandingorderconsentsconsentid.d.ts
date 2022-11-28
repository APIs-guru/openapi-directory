import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInternationalStandingOrderConsentsConsentIdPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class GetInternationalStandingOrderConsentsConsentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetInternationalStandingOrderConsentsConsentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetInternationalStandingOrderConsentsConsentIdRequest extends SpeakeasyBase {
    pathParams: GetInternationalStandingOrderConsentsConsentIdPathParams;
    headers: GetInternationalStandingOrderConsentsConsentIdHeaders;
    security: GetInternationalStandingOrderConsentsConsentIdSecurity;
}
export declare class GetInternationalStandingOrderConsentsConsentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteInternationalStandingOrderConsentResponse7?: shared.ObWriteInternationalStandingOrderConsentResponse7;
    statusCode: number;
}
