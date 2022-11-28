import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInternationalPaymentsInternationalPaymentIdPaymentDetailsPathParams extends SpeakeasyBase {
    internationalPaymentId: string;
}
export declare class GetInternationalPaymentsInternationalPaymentIdPaymentDetailsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetInternationalPaymentsInternationalPaymentIdPaymentDetailsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest extends SpeakeasyBase {
    pathParams: GetInternationalPaymentsInternationalPaymentIdPaymentDetailsPathParams;
    headers: GetInternationalPaymentsInternationalPaymentIdPaymentDetailsHeaders;
    security: GetInternationalPaymentsInternationalPaymentIdPaymentDetailsSecurity;
}
export declare class GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWritePaymentDetailsResponse1?: shared.ObWritePaymentDetailsResponse1;
    statusCode: number;
}
