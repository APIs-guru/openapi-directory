import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObActiveOrHistoricCurrencyAndAmount11
/** 
 * The amount of the last (most recent) Standing Order instruction.
**/
export class ObActiveOrHistoricCurrencyAndAmount11 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}
