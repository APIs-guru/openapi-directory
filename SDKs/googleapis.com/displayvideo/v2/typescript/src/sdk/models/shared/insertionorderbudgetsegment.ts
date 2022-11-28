import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";



// InsertionOrderBudgetSegment
/** 
 * Settings that control the budget of a single budget segment.
**/
export class InsertionOrderBudgetSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=budgetAmountMicros" })
  budgetAmountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignBudgetId" })
  campaignBudgetId?: string;

  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
