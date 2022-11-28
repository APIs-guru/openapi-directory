import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsPathParams extends SpeakeasyBase {
    domesticScheduledPaymentId: string;
}
export declare class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest extends SpeakeasyBase {
    pathParams: GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsPathParams;
    headers: GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsHeaders;
    security: GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsSecurity;
}
export declare class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWritePaymentDetailsResponse1?: shared.ObWritePaymentDetailsResponse1;
    statusCode: number;
}
