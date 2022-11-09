import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrismaCpeCode } from "./prismacpecode";


// BudgetSummary
/** 
 * Summarized information of an individual campaign budget.
**/
export class BudgetSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalBudgetId" })
  externalBudgetId?: string;

  @Metadata({ data: "json, name=preTaxAmountMicros" })
  preTaxAmountMicros?: string;

  @Metadata({ data: "json, name=prismaCpeCode" })
  prismaCpeCode?: PrismaCpeCode;

  @Metadata({ data: "json, name=taxAmountMicros" })
  taxAmountMicros?: string;

  @Metadata({ data: "json, name=totalAmountMicros" })
  totalAmountMicros?: string;
}
