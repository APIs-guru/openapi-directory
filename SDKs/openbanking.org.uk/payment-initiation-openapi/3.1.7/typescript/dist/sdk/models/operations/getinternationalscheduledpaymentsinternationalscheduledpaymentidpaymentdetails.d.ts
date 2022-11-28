import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsPathParams extends SpeakeasyBase {
    internationalScheduledPaymentId: string;
}
export declare class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest extends SpeakeasyBase {
    pathParams: GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsPathParams;
    headers: GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsHeaders;
    security: GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity;
}
export declare class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWritePaymentDetailsResponse1?: shared.ObWritePaymentDetailsResponse1;
    statusCode: number;
}
