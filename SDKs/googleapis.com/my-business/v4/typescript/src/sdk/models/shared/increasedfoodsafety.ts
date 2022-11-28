import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum IncreasedFoodSafetyDisposableFlatwareExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum IncreasedFoodSafetySingleUseFoodMenusExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// IncreasedFoodSafety
/** 
 * Increased food safety measures implemented by the hotel during COVID-19.
**/
export class IncreasedFoodSafety extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diningAreasAdditionalSanitation" })
  diningAreasAdditionalSanitation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=diningAreasAdditionalSanitationException" })
  diningAreasAdditionalSanitationException?: IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=disposableFlatware" })
  disposableFlatware?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disposableFlatwareException" })
  disposableFlatwareException?: IncreasedFoodSafetyDisposableFlatwareExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=foodPreparationAndServingAdditionalSafety" })
  foodPreparationAndServingAdditionalSafety?: boolean;

  @SpeakeasyMetadata({ data: "json, name=foodPreparationAndServingAdditionalSafetyException" })
  foodPreparationAndServingAdditionalSafetyException?: IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=individualPackagedMeals" })
  individualPackagedMeals?: boolean;

  @SpeakeasyMetadata({ data: "json, name=individualPackagedMealsException" })
  individualPackagedMealsException?: IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=singleUseFoodMenus" })
  singleUseFoodMenus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=singleUseFoodMenusException" })
  singleUseFoodMenusException?: IncreasedFoodSafetySingleUseFoodMenusExceptionEnum;
}
