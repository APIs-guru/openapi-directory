import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScheduledPaymentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetScheduledPaymentsSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetScheduledPaymentsRequest extends SpeakeasyBase {
    headers: GetScheduledPaymentsHeaders;
    security: GetScheduledPaymentsSecurity;
}
export declare class GetScheduledPaymentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadScheduledPayment3?: shared.ObReadScheduledPayment3;
    statusCode: number;
}
