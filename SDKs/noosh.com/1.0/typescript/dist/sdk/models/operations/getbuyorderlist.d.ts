import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBuyOrderListPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetBuyOrderListRequest extends SpeakeasyBase {
    pathParams: GetBuyOrderListPathParams;
}
export declare class GetBuyOrderListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    orderListVo?: any;
    statusCode: number;
}
