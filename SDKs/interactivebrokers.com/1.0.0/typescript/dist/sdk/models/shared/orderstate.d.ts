import { SpeakeasyBase } from "../../../internal/utils";
import { OrderStatusEnum } from "./orderstatusenum";
export declare enum OrderStateSideEnum {
    One = "1",
    Two = "2"
}
/**
 * An object containing all the properties defining an order
**/
export declare class OrderState extends SpeakeasyBase {
    contractId?: number;
    customerOrderId?: number;
    filledQuantity?: number;
    listingExchange?: string;
    orderType?: number;
    outsideRth?: string;
    price?: number;
    remainingQuantity?: number;
    side?: OrderStateSideEnum;
    status?: OrderStatusEnum;
    ticker?: string;
    timeInForce?: number;
    transactionTime?: string;
    warning?: string;
}
