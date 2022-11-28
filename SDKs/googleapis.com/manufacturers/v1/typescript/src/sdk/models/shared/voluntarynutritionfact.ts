import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FloatUnit } from "./floatunit";



// VoluntaryNutritionFact
/** 
 * Voluntary Nutrition Facts.
**/
export class VoluntaryNutritionFact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dailyPercentage" })
  dailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: FloatUnit;
}
