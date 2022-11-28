import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDomesticScheduledPaymentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
    xIdempotencyKey: string;
    xJwsSignature: string;
}
export declare class CreateDomesticScheduledPaymentsRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    obWriteDomesticScheduled2?: shared.ObWriteDomesticScheduled2;
    obWriteDomesticScheduled3?: shared.ObWriteDomesticScheduled2;
}
export declare class CreateDomesticScheduledPaymentsSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class CreateDomesticScheduledPaymentsRequest extends SpeakeasyBase {
    headers: CreateDomesticScheduledPaymentsHeaders;
    request: CreateDomesticScheduledPaymentsRequests;
    security: CreateDomesticScheduledPaymentsSecurity;
}
export declare class CreateDomesticScheduledPaymentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteDomesticScheduledResponse5?: shared.ObWriteDomesticScheduledResponse5;
    statusCode: number;
}
