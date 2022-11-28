import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Grocery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeIngredients" })
  activeIngredients?: string;

  @SpeakeasyMetadata({ data: "json, name=alcoholByVolume" })
  alcoholByVolume?: number;

  @SpeakeasyMetadata({ data: "json, name=allergens" })
  allergens?: string;

  @SpeakeasyMetadata({ data: "json, name=derivedNutritionClaim" })
  derivedNutritionClaim?: string[];

  @SpeakeasyMetadata({ data: "json, name=directions" })
  directions?: string;

  @SpeakeasyMetadata({ data: "json, name=indications" })
  indications?: string;

  @SpeakeasyMetadata({ data: "json, name=ingredients" })
  ingredients?: string;

  @SpeakeasyMetadata({ data: "json, name=nutritionClaim" })
  nutritionClaim?: string[];

  @SpeakeasyMetadata({ data: "json, name=storageInstructions" })
  storageInstructions?: string;
}
