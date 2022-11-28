import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateInternationalPaymentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
    xIdempotencyKey: string;
    xJwsSignature: string;
}
export declare class CreateInternationalPaymentsRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    obWriteInternational3?: shared.ObWriteInternational3;
    obWriteInternational4?: shared.ObWriteInternational3;
}
export declare class CreateInternationalPaymentsSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class CreateInternationalPaymentsRequest extends SpeakeasyBase {
    headers: CreateInternationalPaymentsHeaders;
    request: CreateInternationalPaymentsRequests;
    security: CreateInternationalPaymentsSecurity;
}
export declare class CreateInternationalPaymentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteInternationalResponse5?: shared.ObWriteInternationalResponse5;
    statusCode: number;
}
