import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDomesticStandingOrderConsentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
    xIdempotencyKey: string;
    xJwsSignature: string;
}
export declare class CreateDomesticStandingOrderConsentsRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    obWriteDomesticStandingOrderConsent5?: shared.ObWriteDomesticStandingOrderConsent5;
    obWriteDomesticStandingOrderConsent6?: shared.ObWriteDomesticStandingOrderConsent5;
}
export declare class CreateDomesticStandingOrderConsentsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class CreateDomesticStandingOrderConsentsRequest extends SpeakeasyBase {
    headers: CreateDomesticStandingOrderConsentsHeaders;
    request: CreateDomesticStandingOrderConsentsRequests;
    security: CreateDomesticStandingOrderConsentsSecurity;
}
export declare class CreateDomesticStandingOrderConsentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteDomesticStandingOrderConsentResponse6?: shared.ObWriteDomesticStandingOrderConsentResponse6;
    statusCode: number;
}
