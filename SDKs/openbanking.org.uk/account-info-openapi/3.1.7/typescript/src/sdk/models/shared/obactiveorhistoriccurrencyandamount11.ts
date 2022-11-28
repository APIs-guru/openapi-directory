import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObActiveOrHistoricCurrencyAndAmount11
/** 
 * The amount of the last (most recent) Standing Order instruction.
**/
export class ObActiveOrHistoricCurrencyAndAmount11 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}
