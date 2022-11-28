import { SpeakeasyBase } from "../../../internal/utils";
import { OrderreturnsLineItem } from "./orderreturnslineitem";
export declare class OrderreturnsCreateOrderReturnRequest extends SpeakeasyBase {
    lineItems?: OrderreturnsLineItem[];
    operationId?: string;
    orderId?: string;
    returnMethodType?: string;
}
