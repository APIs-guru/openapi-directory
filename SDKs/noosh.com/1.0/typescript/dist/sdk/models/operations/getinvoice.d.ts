import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInvoicePathParams extends SpeakeasyBase {
    invoiceId: string;
    projectId: string;
    workgroupId: string;
}
export declare class GetInvoiceRequest extends SpeakeasyBase {
    pathParams: GetInvoicePathParams;
}
export declare class GetInvoiceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    invoiceExpandVo?: any;
    statusCode: number;
}
