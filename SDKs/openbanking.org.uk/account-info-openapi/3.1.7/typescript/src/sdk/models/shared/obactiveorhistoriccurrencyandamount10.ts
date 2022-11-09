import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObActiveOrHistoricCurrencyAndAmount10
/** 
 * Transaction charges to be paid by the charge bearer.
**/
export class ObActiveOrHistoricCurrencyAndAmount10 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}
