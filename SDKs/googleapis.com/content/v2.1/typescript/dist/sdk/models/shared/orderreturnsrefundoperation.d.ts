import { SpeakeasyBase } from "../../../internal/utils";
import { OrderreturnsPartialRefund } from "./orderreturnspartialrefund";
export declare class OrderreturnsRefundOperation extends SpeakeasyBase {
    fullRefund?: boolean;
    partialRefund?: OrderreturnsPartialRefund;
    paymentType?: string;
    reasonText?: string;
    returnRefundReason?: string;
}
