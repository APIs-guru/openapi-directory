package shared

type IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum string

const (
	IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnumExceptionUnspecified IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum = "EXCEPTION_UNSPECIFIED"
	IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnumUnderConstruction    IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum = "UNDER_CONSTRUCTION"
	IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnumDependentOnSeason    IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum = "DEPENDENT_ON_SEASON"
	IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnumDependentOnDayOfWeek IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type IncreasedFoodSafetyDisposableFlatwareExceptionEnum string

const (
	IncreasedFoodSafetyDisposableFlatwareExceptionEnumExceptionUnspecified IncreasedFoodSafetyDisposableFlatwareExceptionEnum = "EXCEPTION_UNSPECIFIED"
	IncreasedFoodSafetyDisposableFlatwareExceptionEnumUnderConstruction    IncreasedFoodSafetyDisposableFlatwareExceptionEnum = "UNDER_CONSTRUCTION"
	IncreasedFoodSafetyDisposableFlatwareExceptionEnumDependentOnSeason    IncreasedFoodSafetyDisposableFlatwareExceptionEnum = "DEPENDENT_ON_SEASON"
	IncreasedFoodSafetyDisposableFlatwareExceptionEnumDependentOnDayOfWeek IncreasedFoodSafetyDisposableFlatwareExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum string

const (
	IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnumExceptionUnspecified IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum = "EXCEPTION_UNSPECIFIED"
	IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnumUnderConstruction    IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum = "UNDER_CONSTRUCTION"
	IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnumDependentOnSeason    IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum = "DEPENDENT_ON_SEASON"
	IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnumDependentOnDayOfWeek IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum string

const (
	IncreasedFoodSafetyIndividualPackagedMealsExceptionEnumExceptionUnspecified IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum = "EXCEPTION_UNSPECIFIED"
	IncreasedFoodSafetyIndividualPackagedMealsExceptionEnumUnderConstruction    IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum = "UNDER_CONSTRUCTION"
	IncreasedFoodSafetyIndividualPackagedMealsExceptionEnumDependentOnSeason    IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum = "DEPENDENT_ON_SEASON"
	IncreasedFoodSafetyIndividualPackagedMealsExceptionEnumDependentOnDayOfWeek IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type IncreasedFoodSafetySingleUseFoodMenusExceptionEnum string

const (
	IncreasedFoodSafetySingleUseFoodMenusExceptionEnumExceptionUnspecified IncreasedFoodSafetySingleUseFoodMenusExceptionEnum = "EXCEPTION_UNSPECIFIED"
	IncreasedFoodSafetySingleUseFoodMenusExceptionEnumUnderConstruction    IncreasedFoodSafetySingleUseFoodMenusExceptionEnum = "UNDER_CONSTRUCTION"
	IncreasedFoodSafetySingleUseFoodMenusExceptionEnumDependentOnSeason    IncreasedFoodSafetySingleUseFoodMenusExceptionEnum = "DEPENDENT_ON_SEASON"
	IncreasedFoodSafetySingleUseFoodMenusExceptionEnumDependentOnDayOfWeek IncreasedFoodSafetySingleUseFoodMenusExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type IncreasedFoodSafety struct {
	DiningAreasAdditionalSanitation                    *bool                                                                      `json:"diningAreasAdditionalSanitation"`
	DiningAreasAdditionalSanitationException           *IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum           `json:"diningAreasAdditionalSanitationException"`
	DisposableFlatware                                 *bool                                                                      `json:"disposableFlatware"`
	DisposableFlatwareException                        *IncreasedFoodSafetyDisposableFlatwareExceptionEnum                        `json:"disposableFlatwareException"`
	FoodPreparationAndServingAdditionalSafety          *bool                                                                      `json:"foodPreparationAndServingAdditionalSafety"`
	FoodPreparationAndServingAdditionalSafetyException *IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum `json:"foodPreparationAndServingAdditionalSafetyException"`
	IndividualPackagedMeals                            *bool                                                                      `json:"individualPackagedMeals"`
	IndividualPackagedMealsException                   *IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum                   `json:"individualPackagedMealsException"`
	SingleUseFoodMenus                                 *bool                                                                      `json:"singleUseFoodMenus"`
	SingleUseFoodMenusException                        *IncreasedFoodSafetySingleUseFoodMenusExceptionEnum                        `json:"singleUseFoodMenusException"`
}
