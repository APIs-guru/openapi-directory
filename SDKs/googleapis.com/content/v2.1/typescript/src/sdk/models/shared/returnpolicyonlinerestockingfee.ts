import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PriceAmount } from "./priceamount";


// ReturnPolicyOnlineRestockingFee
/** 
 * The restocking fee. This can either be a fixed fee or a micro percent.
**/
export class ReturnPolicyOnlineRestockingFee extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixedFee" })
  fixedFee?: PriceAmount;

  @Metadata({ data: "json, name=microPercent" })
  microPercent?: number;
}
