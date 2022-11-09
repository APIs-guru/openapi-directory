import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PaginationLinks } from "./paginationlinks";
import { OrderLineItem } from "./orderlineitem";
export declare enum GetOrderOrderStatusEnum {
    Active = "Active",
    Cancelled = "Cancelled",
    Completed = "Completed"
}
export declare class GetOrder extends SpeakeasyBase {
    id: string;
    links?: PaginationLinks;
    numberOfLineItems: number;
    orderLineItems?: OrderLineItem[];
    orderNumber: string;
    orderStatus: GetOrderOrderStatusEnum;
}
