import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrismaCpeCode } from "./prismacpecode";



// BudgetSummary
/** 
 * Summarized information of an individual campaign budget.
**/
export class BudgetSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalBudgetId" })
  externalBudgetId?: string;

  @SpeakeasyMetadata({ data: "json, name=preTaxAmountMicros" })
  preTaxAmountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=prismaCpeCode" })
  prismaCpeCode?: PrismaCpeCode;

  @SpeakeasyMetadata({ data: "json, name=taxAmountMicros" })
  taxAmountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmountMicros" })
  totalAmountMicros?: string;
}
