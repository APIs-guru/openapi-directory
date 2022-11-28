import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObActiveOrHistoricCurrencyAndAmount4
/** 
 * The amount of the final Standing Order
**/
export class ObActiveOrHistoricCurrencyAndAmount4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}
