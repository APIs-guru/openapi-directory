import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObActiveOrHistoricCurrencyAndAmount5
/** 
 * Amount of money associated with the statement benefit type.
**/
export class ObActiveOrHistoricCurrencyAndAmount5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}
