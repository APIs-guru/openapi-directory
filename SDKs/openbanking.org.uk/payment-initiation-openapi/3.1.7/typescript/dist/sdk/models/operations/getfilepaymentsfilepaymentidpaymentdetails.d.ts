import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFilePaymentsFilePaymentIdPaymentDetailsPathParams extends SpeakeasyBase {
    filePaymentId: string;
}
export declare class GetFilePaymentsFilePaymentIdPaymentDetailsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetFilePaymentsFilePaymentIdPaymentDetailsSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetFilePaymentsFilePaymentIdPaymentDetailsRequest extends SpeakeasyBase {
    pathParams: GetFilePaymentsFilePaymentIdPaymentDetailsPathParams;
    headers: GetFilePaymentsFilePaymentIdPaymentDetailsHeaders;
    security: GetFilePaymentsFilePaymentIdPaymentDetailsSecurity;
}
export declare class GetFilePaymentsFilePaymentIdPaymentDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWritePaymentDetailsResponse1?: shared.ObWritePaymentDetailsResponse1;
    statusCode: number;
}
