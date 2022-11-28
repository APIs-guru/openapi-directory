import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsPathParams extends SpeakeasyBase {
    internationalStandingOrderPaymentId: string;
}
export declare class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRequest extends SpeakeasyBase {
    pathParams: GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsPathParams;
    headers: GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsHeaders;
    security: GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsSecurity;
}
export declare class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWritePaymentDetailsResponse1?: shared.ObWritePaymentDetailsResponse1;
    statusCode: number;
}
