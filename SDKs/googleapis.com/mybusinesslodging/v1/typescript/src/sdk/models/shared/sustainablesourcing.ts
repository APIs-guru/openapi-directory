import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SustainableSourcingEcoFriendlyToiletriesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum SustainableSourcingOrganicCageFreeEggsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum SustainableSourcingOrganicFoodAndBeveragesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum SustainableSourcingResponsiblePurchasingPolicyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum SustainableSourcingResponsiblySourcesSeafoodExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum SustainableSourcingVeganMealsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum SustainableSourcingVegetarianMealsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// SustainableSourcing
/** 
 * Sustainable sourcing practices implemented at the hotel.
**/
export class SustainableSourcing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ecoFriendlyToiletries" })
  ecoFriendlyToiletries?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ecoFriendlyToiletriesException" })
  ecoFriendlyToiletriesException?: SustainableSourcingEcoFriendlyToiletriesExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=locallySourcedFoodAndBeverages" })
  locallySourcedFoodAndBeverages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=locallySourcedFoodAndBeveragesException" })
  locallySourcedFoodAndBeveragesException?: SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=organicCageFreeEggs" })
  organicCageFreeEggs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=organicCageFreeEggsException" })
  organicCageFreeEggsException?: SustainableSourcingOrganicCageFreeEggsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=organicFoodAndBeverages" })
  organicFoodAndBeverages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=organicFoodAndBeveragesException" })
  organicFoodAndBeveragesException?: SustainableSourcingOrganicFoodAndBeveragesExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=responsiblePurchasingPolicy" })
  responsiblePurchasingPolicy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=responsiblePurchasingPolicyException" })
  responsiblePurchasingPolicyException?: SustainableSourcingResponsiblePurchasingPolicyExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=responsiblySourcesSeafood" })
  responsiblySourcesSeafood?: boolean;

  @SpeakeasyMetadata({ data: "json, name=responsiblySourcesSeafoodException" })
  responsiblySourcesSeafoodException?: SustainableSourcingResponsiblySourcesSeafoodExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=veganMeals" })
  veganMeals?: boolean;

  @SpeakeasyMetadata({ data: "json, name=veganMealsException" })
  veganMealsException?: SustainableSourcingVeganMealsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=vegetarianMeals" })
  vegetarianMeals?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vegetarianMealsException" })
  vegetarianMealsException?: SustainableSourcingVegetarianMealsExceptionEnum;
}
