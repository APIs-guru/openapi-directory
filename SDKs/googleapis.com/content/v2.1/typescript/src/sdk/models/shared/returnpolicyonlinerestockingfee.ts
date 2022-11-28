import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PriceAmount } from "./priceamount";



// ReturnPolicyOnlineRestockingFee
/** 
 * The restocking fee. This can either be a fixed fee or a micro percent.
**/
export class ReturnPolicyOnlineRestockingFee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixedFee" })
  fixedFee?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=microPercent" })
  microPercent?: number;
}
