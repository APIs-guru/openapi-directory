import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrderPathParams extends SpeakeasyBase {
    orderId: string;
    projectId: string;
    workgroupId: string;
}
export declare class GetOrderRequest extends SpeakeasyBase {
    pathParams: GetOrderPathParams;
}
export declare class GetOrderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    orderDetailWithIndicatorVo?: any;
    statusCode: number;
}
