import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObActiveOrHistoricCurrencyAndAmount9
/** 
 * Amount of money in the cash transaction entry.
**/
export class ObActiveOrHistoricCurrencyAndAmount9 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}
