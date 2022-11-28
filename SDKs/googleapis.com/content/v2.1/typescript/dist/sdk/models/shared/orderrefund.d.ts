import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class OrderRefund extends SpeakeasyBase {
    actor?: string;
    amount?: Price;
    creationDate?: string;
    reason?: string;
    reasonText?: string;
}
