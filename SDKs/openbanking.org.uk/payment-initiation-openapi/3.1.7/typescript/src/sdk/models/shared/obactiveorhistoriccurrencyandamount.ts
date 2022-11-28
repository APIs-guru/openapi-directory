import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObActiveOrHistoricCurrencyAndAmount
/** 
 * Amount of money associated with the charge type.
**/
export class ObActiveOrHistoricCurrencyAndAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}
