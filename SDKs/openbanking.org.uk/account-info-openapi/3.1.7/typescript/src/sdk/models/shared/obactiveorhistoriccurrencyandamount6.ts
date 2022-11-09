import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObActiveOrHistoricCurrencyAndAmount6
/** 
 * Amount of money associated with the statement fee type.
**/
export class ObActiveOrHistoricCurrencyAndAmount6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}
