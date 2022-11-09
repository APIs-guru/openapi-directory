import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetOrdersOrderIdPathParams extends SpeakeasyBase {
    orderId: string;
}
export declare class GetOrdersOrderIdRequest extends SpeakeasyBase {
    pathParams: GetOrdersOrderIdPathParams;
}
export declare class GetOrdersOrderIdResponse extends SpeakeasyBase {
    contentType: string;
    getOrder?: shared.GetOrder;
    statusCode: number;
}
