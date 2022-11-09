import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class OrdersPathParams extends SpeakeasyBase {
    name: string;
    orderId: string;
}
export declare class OrdersHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class OrdersSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class OrdersRequest extends SpeakeasyBase {
    pathParams: OrdersPathParams;
    headers: OrdersHeaders;
    security: OrdersSecurity;
}
export declare class OrdersResponse extends SpeakeasyBase {
    contentType: string;
    orders200ApplicationJsonString?: string;
    statusCode: number;
}
