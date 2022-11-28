import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObActiveOrHistoricCurrencyAndAmount0
/** 
 * The amount of the most recent direct debit collection.
**/
export class ObActiveOrHistoricCurrencyAndAmount0 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}
