import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSellOrderListPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetSellOrderListRequest extends SpeakeasyBase {
    pathParams: GetSellOrderListPathParams;
}
export declare class GetSellOrderListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    orderListVo?: any;
    statusCode: number;
}
