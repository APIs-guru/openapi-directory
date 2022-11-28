import { SpeakeasyBase } from "../../../internal/utils";
import { OrderreturnsRefundOperation } from "./orderreturnsrefundoperation";
import { OrderreturnsRejectOperation } from "./orderreturnsrejectoperation";
export declare class OrderreturnsReturnItem extends SpeakeasyBase {
    refund?: OrderreturnsRefundOperation;
    reject?: OrderreturnsRejectOperation;
    returnItemId?: string;
}
