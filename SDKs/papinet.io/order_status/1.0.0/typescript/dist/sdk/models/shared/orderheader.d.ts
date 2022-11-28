import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OrderHeaderOrderStatusEnum {
    Active = "Active",
    Cancelled = "Cancelled",
    Completed = "Completed"
}
export declare class OrderHeader extends SpeakeasyBase {
    id: string;
    numberOfLineItems: number;
    orderNumber: string;
    orderStatus: OrderHeaderOrderStatusEnum;
}
