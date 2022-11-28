import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomesticStandingOrdersDomesticStandingOrderIdPathParams extends SpeakeasyBase {
    domesticStandingOrderId: string;
}
export declare class GetDomesticStandingOrdersDomesticStandingOrderIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetDomesticStandingOrdersDomesticStandingOrderIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetDomesticStandingOrdersDomesticStandingOrderIdRequest extends SpeakeasyBase {
    pathParams: GetDomesticStandingOrdersDomesticStandingOrderIdPathParams;
    headers: GetDomesticStandingOrdersDomesticStandingOrderIdHeaders;
    security: GetDomesticStandingOrdersDomesticStandingOrderIdSecurity;
}
export declare class GetDomesticStandingOrdersDomesticStandingOrderIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteDomesticStandingOrderResponse6?: shared.ObWriteDomesticStandingOrderResponse6;
    statusCode: number;
}
