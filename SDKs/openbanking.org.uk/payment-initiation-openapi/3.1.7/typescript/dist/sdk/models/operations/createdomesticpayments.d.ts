import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDomesticPaymentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
    xIdempotencyKey: string;
    xJwsSignature: string;
}
export declare class CreateDomesticPaymentsRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    obWriteDomestic2?: shared.ObWriteDomestic2;
    obWriteDomestic3?: shared.ObWriteDomestic2;
}
export declare class CreateDomesticPaymentsSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class CreateDomesticPaymentsRequest extends SpeakeasyBase {
    headers: CreateDomesticPaymentsHeaders;
    request: CreateDomesticPaymentsRequests;
    security: CreateDomesticPaymentsSecurity;
}
export declare class CreateDomesticPaymentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteDomesticResponse5?: shared.ObWriteDomesticResponse5;
    statusCode: number;
}
