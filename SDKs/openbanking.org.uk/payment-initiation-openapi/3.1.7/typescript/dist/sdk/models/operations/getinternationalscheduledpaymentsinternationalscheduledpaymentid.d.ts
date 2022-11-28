import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPathParams extends SpeakeasyBase {
    internationalScheduledPaymentId: string;
}
export declare class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest extends SpeakeasyBase {
    pathParams: GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPathParams;
    headers: GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders;
    security: GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity;
}
export declare class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteInternationalScheduledResponse6?: shared.ObWriteInternationalScheduledResponse6;
    statusCode: number;
}
