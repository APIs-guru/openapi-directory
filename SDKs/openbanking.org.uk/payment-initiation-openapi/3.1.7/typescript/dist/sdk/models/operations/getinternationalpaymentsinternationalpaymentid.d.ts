import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInternationalPaymentsInternationalPaymentIdPathParams extends SpeakeasyBase {
    internationalPaymentId: string;
}
export declare class GetInternationalPaymentsInternationalPaymentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetInternationalPaymentsInternationalPaymentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetInternationalPaymentsInternationalPaymentIdRequest extends SpeakeasyBase {
    pathParams: GetInternationalPaymentsInternationalPaymentIdPathParams;
    headers: GetInternationalPaymentsInternationalPaymentIdHeaders;
    security: GetInternationalPaymentsInternationalPaymentIdSecurity;
}
export declare class GetInternationalPaymentsInternationalPaymentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteInternationalResponse5?: shared.ObWriteInternationalResponse5;
    statusCode: number;
}
