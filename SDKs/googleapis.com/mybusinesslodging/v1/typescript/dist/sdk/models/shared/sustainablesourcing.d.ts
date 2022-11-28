import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SustainableSourcingEcoFriendlyToiletriesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum SustainableSourcingOrganicCageFreeEggsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum SustainableSourcingOrganicFoodAndBeveragesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum SustainableSourcingResponsiblePurchasingPolicyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum SustainableSourcingResponsiblySourcesSeafoodExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum SustainableSourcingVeganMealsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum SustainableSourcingVegetarianMealsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Sustainable sourcing practices implemented at the hotel.
**/
export declare class SustainableSourcing extends SpeakeasyBase {
    ecoFriendlyToiletries?: boolean;
    ecoFriendlyToiletriesException?: SustainableSourcingEcoFriendlyToiletriesExceptionEnum;
    locallySourcedFoodAndBeverages?: boolean;
    locallySourcedFoodAndBeveragesException?: SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum;
    organicCageFreeEggs?: boolean;
    organicCageFreeEggsException?: SustainableSourcingOrganicCageFreeEggsExceptionEnum;
    organicFoodAndBeverages?: boolean;
    organicFoodAndBeveragesException?: SustainableSourcingOrganicFoodAndBeveragesExceptionEnum;
    responsiblePurchasingPolicy?: boolean;
    responsiblePurchasingPolicyException?: SustainableSourcingResponsiblePurchasingPolicyExceptionEnum;
    responsiblySourcesSeafood?: boolean;
    responsiblySourcesSeafoodException?: SustainableSourcingResponsiblySourcesSeafoodExceptionEnum;
    veganMeals?: boolean;
    veganMealsException?: SustainableSourcingVeganMealsExceptionEnum;
    vegetarianMeals?: boolean;
    vegetarianMealsException?: SustainableSourcingVegetarianMealsExceptionEnum;
}
