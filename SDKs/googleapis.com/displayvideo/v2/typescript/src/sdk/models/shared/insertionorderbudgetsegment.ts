import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateRange } from "./daterange";


// InsertionOrderBudgetSegment
/** 
 * Settings that control the budget of a single budget segment.
**/
export class InsertionOrderBudgetSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=budgetAmountMicros" })
  budgetAmountMicros?: string;

  @Metadata({ data: "json, name=campaignBudgetId" })
  campaignBudgetId?: string;

  @Metadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=description" })
  description?: string;
}
