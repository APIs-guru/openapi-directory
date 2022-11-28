import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetOrdersStatusStatusJsonStatusEnum {
    Abandoned = "Abandoned",
    Canceled = "Canceled",
    PendingPayment = "Pending Payment",
    Paid = "Paid"
}
export declare class GetOrdersStatusStatusJsonPathParams extends SpeakeasyBase {
    status: GetOrdersStatusStatusJsonStatusEnum;
}
export declare class GetOrdersStatusStatusJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetOrdersStatusStatusJsonRequest extends SpeakeasyBase {
    pathParams: GetOrdersStatusStatusJsonPathParams;
    queryParams: GetOrdersStatusStatusJsonQueryParams;
}
export declare class GetOrdersStatusStatusJsonResponse extends SpeakeasyBase {
    contentType: string;
    orders?: shared.Order[];
    statusCode: number;
    statusInvalid?: any;
}
