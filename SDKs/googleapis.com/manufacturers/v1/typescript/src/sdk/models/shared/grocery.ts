import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Grocery extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeIngredients" })
  activeIngredients?: string;

  @Metadata({ data: "json, name=alcoholByVolume" })
  alcoholByVolume?: number;

  @Metadata({ data: "json, name=allergens" })
  allergens?: string;

  @Metadata({ data: "json, name=derivedNutritionClaim" })
  derivedNutritionClaim?: string[];

  @Metadata({ data: "json, name=directions" })
  directions?: string;

  @Metadata({ data: "json, name=indications" })
  indications?: string;

  @Metadata({ data: "json, name=ingredients" })
  ingredients?: string;

  @Metadata({ data: "json, name=nutritionClaim" })
  nutritionClaim?: string[];

  @Metadata({ data: "json, name=storageInstructions" })
  storageInstructions?: string;
}
