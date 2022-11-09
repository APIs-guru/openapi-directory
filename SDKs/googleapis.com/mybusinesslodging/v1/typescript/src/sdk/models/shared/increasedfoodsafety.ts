import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum IncreasedFoodSafetyDisposableFlatwareExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum IncreasedFoodSafetySingleUseFoodMenusExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// IncreasedFoodSafety
/** 
 * Increased food safety measures implemented by the hotel during COVID-19.
**/
export class IncreasedFoodSafety extends SpeakeasyBase {
  @Metadata({ data: "json, name=diningAreasAdditionalSanitation" })
  diningAreasAdditionalSanitation?: boolean;

  @Metadata({ data: "json, name=diningAreasAdditionalSanitationException" })
  diningAreasAdditionalSanitationException?: IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum;

  @Metadata({ data: "json, name=disposableFlatware" })
  disposableFlatware?: boolean;

  @Metadata({ data: "json, name=disposableFlatwareException" })
  disposableFlatwareException?: IncreasedFoodSafetyDisposableFlatwareExceptionEnum;

  @Metadata({ data: "json, name=foodPreparationAndServingAdditionalSafety" })
  foodPreparationAndServingAdditionalSafety?: boolean;

  @Metadata({ data: "json, name=foodPreparationAndServingAdditionalSafetyException" })
  foodPreparationAndServingAdditionalSafetyException?: IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum;

  @Metadata({ data: "json, name=individualPackagedMeals" })
  individualPackagedMeals?: boolean;

  @Metadata({ data: "json, name=individualPackagedMealsException" })
  individualPackagedMealsException?: IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum;

  @Metadata({ data: "json, name=singleUseFoodMenus" })
  singleUseFoodMenus?: boolean;

  @Metadata({ data: "json, name=singleUseFoodMenusException" })
  singleUseFoodMenusException?: IncreasedFoodSafetySingleUseFoodMenusExceptionEnum;
}
