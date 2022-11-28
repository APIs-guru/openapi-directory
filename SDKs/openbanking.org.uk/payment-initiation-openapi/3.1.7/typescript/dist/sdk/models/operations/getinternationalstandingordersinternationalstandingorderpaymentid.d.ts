import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPathParams extends SpeakeasyBase {
    internationalStandingOrderPaymentId: string;
}
export declare class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest extends SpeakeasyBase {
    pathParams: GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPathParams;
    headers: GetInternationalStandingOrdersInternationalStandingOrderPaymentIdHeaders;
    security: GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity;
}
export declare class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteInternationalStandingOrderResponse7?: shared.ObWriteInternationalStandingOrderResponse7;
    statusCode: number;
}
