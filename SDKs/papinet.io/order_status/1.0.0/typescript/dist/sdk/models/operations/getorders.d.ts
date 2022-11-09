import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetOrdersOrderStatusEnum {
    Active = "Active",
    Cancelled = "Cancelled",
    Completed = "Completed"
}
export declare class GetOrdersQueryParams extends SpeakeasyBase {
    limit?: string;
    offset?: string;
    orderStatus?: GetOrdersOrderStatusEnum;
}
export declare class GetOrdersRequest extends SpeakeasyBase {
    queryParams: GetOrdersQueryParams;
}
export declare class GetOrdersResponse extends SpeakeasyBase {
    contentType: string;
    listOfOrders?: shared.ListOfOrders;
    statusCode: number;
}
