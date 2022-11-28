import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsPathParams extends SpeakeasyBase {
    domesticStandingOrderId: string;
}
export declare class GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest extends SpeakeasyBase {
    pathParams: GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsPathParams;
    headers: GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsHeaders;
    security: GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity;
}
export declare class GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWritePaymentDetailsResponse1?: shared.ObWritePaymentDetailsResponse1;
    statusCode: number;
}
