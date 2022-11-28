import { SpeakeasyBase } from "../../../internal/utils";
import { PriceAmount } from "./priceamount";
/**
 * The restocking fee. This can either be a fixed fee or a micro percent.
**/
export declare class ReturnPolicyOnlineRestockingFee extends SpeakeasyBase {
    fixedFee?: PriceAmount;
    microPercent?: number;
}
