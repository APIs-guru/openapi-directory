import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomesticPaymentsDomesticPaymentIdPaymentDetailsPathParams extends SpeakeasyBase {
    domesticPaymentId: string;
}
export declare class GetDomesticPaymentsDomesticPaymentIdPaymentDetailsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetDomesticPaymentsDomesticPaymentIdPaymentDetailsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest extends SpeakeasyBase {
    pathParams: GetDomesticPaymentsDomesticPaymentIdPaymentDetailsPathParams;
    headers: GetDomesticPaymentsDomesticPaymentIdPaymentDetailsHeaders;
    security: GetDomesticPaymentsDomesticPaymentIdPaymentDetailsSecurity;
}
export declare class GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWritePaymentDetailsResponse1?: shared.ObWritePaymentDetailsResponse1;
    statusCode: number;
}
