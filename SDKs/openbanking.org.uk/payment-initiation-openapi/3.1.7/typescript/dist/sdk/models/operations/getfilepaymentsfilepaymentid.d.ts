import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFilePaymentsFilePaymentIdPathParams extends SpeakeasyBase {
    filePaymentId: string;
}
export declare class GetFilePaymentsFilePaymentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetFilePaymentsFilePaymentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetFilePaymentsFilePaymentIdRequest extends SpeakeasyBase {
    pathParams: GetFilePaymentsFilePaymentIdPathParams;
    headers: GetFilePaymentsFilePaymentIdHeaders;
    security: GetFilePaymentsFilePaymentIdSecurity;
}
export declare class GetFilePaymentsFilePaymentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteFileResponse3?: shared.ObWriteFileResponse3;
    statusCode: number;
}
