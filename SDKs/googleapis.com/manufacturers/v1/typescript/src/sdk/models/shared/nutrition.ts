import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { FloatUnit } from "./floatunit";
import { VoluntaryNutritionFact } from "./voluntarynutritionfact";


export class Nutrition extends SpeakeasyBase {
  @Metadata({ data: "json, name=addedSugars" })
  addedSugars?: FloatUnit;

  @Metadata({ data: "json, name=addedSugarsDailyPercentage" })
  addedSugarsDailyPercentage?: number;

  @Metadata({ data: "json, name=calcium" })
  calcium?: FloatUnit;

  @Metadata({ data: "json, name=calciumDailyPercentage" })
  calciumDailyPercentage?: number;

  @Metadata({ data: "json, name=cholesterol" })
  cholesterol?: FloatUnit;

  @Metadata({ data: "json, name=cholesterolDailyPercentage" })
  cholesterolDailyPercentage?: number;

  @Metadata({ data: "json, name=dietaryFiber" })
  dietaryFiber?: FloatUnit;

  @Metadata({ data: "json, name=dietaryFiberDailyPercentage" })
  dietaryFiberDailyPercentage?: number;

  @Metadata({ data: "json, name=energy" })
  energy?: FloatUnit;

  @Metadata({ data: "json, name=energyFromFat" })
  energyFromFat?: FloatUnit;

  @Metadata({ data: "json, name=folateDailyPercentage" })
  folateDailyPercentage?: number;

  @Metadata({ data: "json, name=folateFolicAcid" })
  folateFolicAcid?: FloatUnit;

  @Metadata({ data: "json, name=folateMcgDfe" })
  folateMcgDfe?: number;

  @Metadata({ data: "json, name=iron" })
  iron?: FloatUnit;

  @Metadata({ data: "json, name=ironDailyPercentage" })
  ironDailyPercentage?: number;

  @Metadata({ data: "json, name=monounsaturatedFat" })
  monounsaturatedFat?: FloatUnit;

  @Metadata({ data: "json, name=nutritionFactMeasure" })
  nutritionFactMeasure?: string;

  @Metadata({ data: "json, name=polyols" })
  polyols?: FloatUnit;

  @Metadata({ data: "json, name=polyunsaturatedFat" })
  polyunsaturatedFat?: FloatUnit;

  @Metadata({ data: "json, name=potassium" })
  potassium?: FloatUnit;

  @Metadata({ data: "json, name=potassiumDailyPercentage" })
  potassiumDailyPercentage?: number;

  @Metadata({ data: "json, name=preparedSizeDescription" })
  preparedSizeDescription?: string;

  @Metadata({ data: "json, name=protein" })
  protein?: FloatUnit;

  @Metadata({ data: "json, name=proteinDailyPercentage" })
  proteinDailyPercentage?: number;

  @Metadata({ data: "json, name=saturatedFat" })
  saturatedFat?: FloatUnit;

  @Metadata({ data: "json, name=saturatedFatDailyPercentage" })
  saturatedFatDailyPercentage?: number;

  @Metadata({ data: "json, name=servingSizeDescription" })
  servingSizeDescription?: string;

  @Metadata({ data: "json, name=servingSizeMeasure" })
  servingSizeMeasure?: FloatUnit;

  @Metadata({ data: "json, name=servingsPerContainer" })
  servingsPerContainer?: string;

  @Metadata({ data: "json, name=sodium" })
  sodium?: FloatUnit;

  @Metadata({ data: "json, name=sodiumDailyPercentage" })
  sodiumDailyPercentage?: number;

  @Metadata({ data: "json, name=starch" })
  starch?: FloatUnit;

  @Metadata({ data: "json, name=totalCarbohydrate" })
  totalCarbohydrate?: FloatUnit;

  @Metadata({ data: "json, name=totalCarbohydrateDailyPercentage" })
  totalCarbohydrateDailyPercentage?: number;

  @Metadata({ data: "json, name=totalFat" })
  totalFat?: FloatUnit;

  @Metadata({ data: "json, name=totalFatDailyPercentage" })
  totalFatDailyPercentage?: number;

  @Metadata({ data: "json, name=totalSugars" })
  totalSugars?: FloatUnit;

  @Metadata({ data: "json, name=totalSugarsDailyPercentage" })
  totalSugarsDailyPercentage?: number;

  @Metadata({ data: "json, name=transFat" })
  transFat?: FloatUnit;

  @Metadata({ data: "json, name=transFatDailyPercentage" })
  transFatDailyPercentage?: number;

  @Metadata({ data: "json, name=vitaminD" })
  vitaminD?: FloatUnit;

  @Metadata({ data: "json, name=vitaminDDailyPercentage" })
  vitaminDDailyPercentage?: number;

  @Metadata({ data: "json, name=voluntaryNutritionFact", elemType: shared.VoluntaryNutritionFact })
  voluntaryNutritionFact?: VoluntaryNutritionFact[];
}
