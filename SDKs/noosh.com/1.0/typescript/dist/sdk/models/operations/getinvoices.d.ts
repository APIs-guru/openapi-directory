import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInvoicesPathParams extends SpeakeasyBase {
    orderId: string;
    projectId: string;
    workgroupId: string;
}
export declare class GetInvoicesRequest extends SpeakeasyBase {
    pathParams: GetInvoicesPathParams;
}
export declare class GetInvoicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    invoiceDetailListExpandVo?: any;
    statusCode: number;
}
