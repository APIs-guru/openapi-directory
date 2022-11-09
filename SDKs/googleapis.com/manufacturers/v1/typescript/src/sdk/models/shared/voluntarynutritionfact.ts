import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FloatUnit } from "./floatunit";


// VoluntaryNutritionFact
/** 
 * Voluntary Nutrition Facts.
**/
export class VoluntaryNutritionFact extends SpeakeasyBase {
  @Metadata({ data: "json, name=dailyPercentage" })
  dailyPercentage?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: FloatUnit;
}
