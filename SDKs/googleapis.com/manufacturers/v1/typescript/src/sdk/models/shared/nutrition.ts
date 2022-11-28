import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FloatUnit } from "./floatunit";
import { VoluntaryNutritionFact } from "./voluntarynutritionfact";



export class Nutrition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addedSugars" })
  addedSugars?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=addedSugarsDailyPercentage" })
  addedSugarsDailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=calcium" })
  calcium?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=calciumDailyPercentage" })
  calciumDailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=cholesterol" })
  cholesterol?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=cholesterolDailyPercentage" })
  cholesterolDailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=dietaryFiber" })
  dietaryFiber?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=dietaryFiberDailyPercentage" })
  dietaryFiberDailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=energy" })
  energy?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=energyFromFat" })
  energyFromFat?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=folateDailyPercentage" })
  folateDailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=folateFolicAcid" })
  folateFolicAcid?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=folateMcgDfe" })
  folateMcgDfe?: number;

  @SpeakeasyMetadata({ data: "json, name=iron" })
  iron?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=ironDailyPercentage" })
  ironDailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=monounsaturatedFat" })
  monounsaturatedFat?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=nutritionFactMeasure" })
  nutritionFactMeasure?: string;

  @SpeakeasyMetadata({ data: "json, name=polyols" })
  polyols?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=polyunsaturatedFat" })
  polyunsaturatedFat?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=potassium" })
  potassium?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=potassiumDailyPercentage" })
  potassiumDailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=preparedSizeDescription" })
  preparedSizeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=protein" })
  protein?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=proteinDailyPercentage" })
  proteinDailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=saturatedFat" })
  saturatedFat?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=saturatedFatDailyPercentage" })
  saturatedFatDailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=servingSizeDescription" })
  servingSizeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=servingSizeMeasure" })
  servingSizeMeasure?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=servingsPerContainer" })
  servingsPerContainer?: string;

  @SpeakeasyMetadata({ data: "json, name=sodium" })
  sodium?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=sodiumDailyPercentage" })
  sodiumDailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=starch" })
  starch?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=totalCarbohydrate" })
  totalCarbohydrate?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=totalCarbohydrateDailyPercentage" })
  totalCarbohydrateDailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalFat" })
  totalFat?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=totalFatDailyPercentage" })
  totalFatDailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalSugars" })
  totalSugars?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=totalSugarsDailyPercentage" })
  totalSugarsDailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=transFat" })
  transFat?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=transFatDailyPercentage" })
  transFatDailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=vitaminD" })
  vitaminD?: FloatUnit;

  @SpeakeasyMetadata({ data: "json, name=vitaminDDailyPercentage" })
  vitaminDDailyPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=voluntaryNutritionFact", elemType: VoluntaryNutritionFact })
  voluntaryNutritionFact?: VoluntaryNutritionFact[];
}
