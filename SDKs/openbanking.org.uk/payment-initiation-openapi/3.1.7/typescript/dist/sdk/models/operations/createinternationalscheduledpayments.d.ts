import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateInternationalScheduledPaymentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
    xIdempotencyKey: string;
    xJwsSignature: string;
}
export declare class CreateInternationalScheduledPaymentsRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    obWriteInternationalScheduled3?: shared.ObWriteInternationalScheduled3;
    obWriteInternationalScheduled4?: shared.ObWriteInternationalScheduled3;
}
export declare class CreateInternationalScheduledPaymentsSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class CreateInternationalScheduledPaymentsRequest extends SpeakeasyBase {
    headers: CreateInternationalScheduledPaymentsHeaders;
    request: CreateInternationalScheduledPaymentsRequests;
    security: CreateInternationalScheduledPaymentsSecurity;
}
export declare class CreateInternationalScheduledPaymentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteInternationalScheduledResponse6?: shared.ObWriteInternationalScheduledResponse6;
    statusCode: number;
}
