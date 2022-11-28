import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFilePaymentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
    xIdempotencyKey: string;
    xJwsSignature: string;
}
export declare class CreateFilePaymentsRequests extends SpeakeasyBase {
    applicationJosePlusJwe: Uint8Array;
    obWriteFile2?: shared.ObWriteFile2;
    obWriteFile3?: shared.ObWriteFile2;
}
export declare class CreateFilePaymentsSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class CreateFilePaymentsRequest extends SpeakeasyBase {
    headers: CreateFilePaymentsHeaders;
    request: CreateFilePaymentsRequests;
    security: CreateFilePaymentsSecurity;
}
export declare class CreateFilePaymentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteFileResponse3?: shared.ObWriteFileResponse3;
    statusCode: number;
}
