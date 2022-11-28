import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRfqListPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetRfqListRequest extends SpeakeasyBase {
    pathParams: GetRfqListPathParams;
}
export declare class GetRfqListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    rfqListVo?: any;
    statusCode: number;
}
