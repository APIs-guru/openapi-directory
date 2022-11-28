import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBuyOrderPathParams extends SpeakeasyBase {
    orderId: string;
    projectId: string;
    workgroupId: string;
}
export declare class GetBuyOrderRequest extends SpeakeasyBase {
    pathParams: GetBuyOrderPathParams;
}
export declare class GetBuyOrderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    orderDetailVo?: any;
    statusCode: number;
}
