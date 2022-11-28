import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSellOrderPathParams extends SpeakeasyBase {
    orderId: string;
    projectId: string;
    workgroupId: string;
}
export declare class GetSellOrderRequest extends SpeakeasyBase {
    pathParams: GetSellOrderPathParams;
}
export declare class GetSellOrderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    orderDetailVo?: any;
    statusCode: number;
}
