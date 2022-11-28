import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFilePaymentsFilePaymentIdReportFilePathParams extends SpeakeasyBase {
    filePaymentId: string;
}
export declare class GetFilePaymentsFilePaymentIdReportFileHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetFilePaymentsFilePaymentIdReportFileSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetFilePaymentsFilePaymentIdReportFileRequest extends SpeakeasyBase {
    pathParams: GetFilePaymentsFilePaymentIdReportFilePathParams;
    headers: GetFilePaymentsFilePaymentIdReportFileHeaders;
    security: GetFilePaymentsFilePaymentIdReportFileSecurity;
}
export declare class GetFilePaymentsFilePaymentIdReportFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    file?: Map<string, any>;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    statusCode: number;
}
