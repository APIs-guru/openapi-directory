import { SpeakeasyBase } from "../../../internal/utils";
import { OrderreturnsRefundOperation } from "./orderreturnsrefundoperation";
import { OrderreturnsReturnItem } from "./orderreturnsreturnitem";
export declare class OrderreturnsProcessRequest extends SpeakeasyBase {
    fullChargeReturnShippingCost?: boolean;
    operationId?: string;
    refundShippingFee?: OrderreturnsRefundOperation;
    returnItems?: OrderreturnsReturnItem[];
}
