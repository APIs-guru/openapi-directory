import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum IncreasedFoodSafetyDisposableFlatwareExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum IncreasedFoodSafetySingleUseFoodMenusExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Increased food safety measures implemented by the hotel during COVID-19.
**/
export declare class IncreasedFoodSafety extends SpeakeasyBase {
    diningAreasAdditionalSanitation?: boolean;
    diningAreasAdditionalSanitationException?: IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum;
    disposableFlatware?: boolean;
    disposableFlatwareException?: IncreasedFoodSafetyDisposableFlatwareExceptionEnum;
    foodPreparationAndServingAdditionalSafety?: boolean;
    foodPreparationAndServingAdditionalSafetyException?: IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum;
    individualPackagedMeals?: boolean;
    individualPackagedMealsException?: IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum;
    singleUseFoodMenus?: boolean;
    singleUseFoodMenusException?: IncreasedFoodSafetySingleUseFoodMenusExceptionEnum;
}
