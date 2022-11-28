import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInvoiceFilesPathParams extends SpeakeasyBase {
    invoiceId: string;
    projectId: string;
    workgroupId: string;
}
export declare class GetInvoiceFilesRequest extends SpeakeasyBase {
    pathParams: GetInvoiceFilesPathParams;
}
export declare class GetInvoiceFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    fileListResponseVo?: any;
    httpStatusVo?: any;
    statusCode: number;
}
