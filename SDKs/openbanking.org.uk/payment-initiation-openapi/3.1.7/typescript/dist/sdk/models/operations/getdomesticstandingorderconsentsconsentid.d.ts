import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomesticStandingOrderConsentsConsentIdPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class GetDomesticStandingOrderConsentsConsentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetDomesticStandingOrderConsentsConsentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetDomesticStandingOrderConsentsConsentIdRequest extends SpeakeasyBase {
    pathParams: GetDomesticStandingOrderConsentsConsentIdPathParams;
    headers: GetDomesticStandingOrderConsentsConsentIdHeaders;
    security: GetDomesticStandingOrderConsentsConsentIdSecurity;
}
export declare class GetDomesticStandingOrderConsentsConsentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteDomesticStandingOrderConsentResponse6?: shared.ObWriteDomesticStandingOrderConsentResponse6;
    statusCode: number;
}
