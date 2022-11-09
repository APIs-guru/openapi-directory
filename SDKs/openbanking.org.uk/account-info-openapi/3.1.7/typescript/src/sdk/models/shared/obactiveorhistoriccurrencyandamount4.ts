import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObActiveOrHistoricCurrencyAndAmount4
/** 
 * The amount of the final Standing Order
**/
export class ObActiveOrHistoricCurrencyAndAmount4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}
