import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SustainableSourcingEcoFriendlyToiletriesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum SustainableSourcingOrganicCageFreeEggsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum SustainableSourcingOrganicFoodAndBeveragesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum SustainableSourcingResponsiblePurchasingPolicyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum SustainableSourcingResponsiblySourcesSeafoodExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum SustainableSourcingVeganMealsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum SustainableSourcingVegetarianMealsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// SustainableSourcing
/** 
 * Sustainable sourcing practices implemented at the hotel.
**/
export class SustainableSourcing extends SpeakeasyBase {
  @Metadata({ data: "json, name=ecoFriendlyToiletries" })
  ecoFriendlyToiletries?: boolean;

  @Metadata({ data: "json, name=ecoFriendlyToiletriesException" })
  ecoFriendlyToiletriesException?: SustainableSourcingEcoFriendlyToiletriesExceptionEnum;

  @Metadata({ data: "json, name=locallySourcedFoodAndBeverages" })
  locallySourcedFoodAndBeverages?: boolean;

  @Metadata({ data: "json, name=locallySourcedFoodAndBeveragesException" })
  locallySourcedFoodAndBeveragesException?: SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum;

  @Metadata({ data: "json, name=organicCageFreeEggs" })
  organicCageFreeEggs?: boolean;

  @Metadata({ data: "json, name=organicCageFreeEggsException" })
  organicCageFreeEggsException?: SustainableSourcingOrganicCageFreeEggsExceptionEnum;

  @Metadata({ data: "json, name=organicFoodAndBeverages" })
  organicFoodAndBeverages?: boolean;

  @Metadata({ data: "json, name=organicFoodAndBeveragesException" })
  organicFoodAndBeveragesException?: SustainableSourcingOrganicFoodAndBeveragesExceptionEnum;

  @Metadata({ data: "json, name=responsiblePurchasingPolicy" })
  responsiblePurchasingPolicy?: boolean;

  @Metadata({ data: "json, name=responsiblePurchasingPolicyException" })
  responsiblePurchasingPolicyException?: SustainableSourcingResponsiblePurchasingPolicyExceptionEnum;

  @Metadata({ data: "json, name=responsiblySourcesSeafood" })
  responsiblySourcesSeafood?: boolean;

  @Metadata({ data: "json, name=responsiblySourcesSeafoodException" })
  responsiblySourcesSeafoodException?: SustainableSourcingResponsiblySourcesSeafoodExceptionEnum;

  @Metadata({ data: "json, name=veganMeals" })
  veganMeals?: boolean;

  @Metadata({ data: "json, name=veganMealsException" })
  veganMealsException?: SustainableSourcingVeganMealsExceptionEnum;

  @Metadata({ data: "json, name=vegetarianMeals" })
  vegetarianMeals?: boolean;

  @Metadata({ data: "json, name=vegetarianMealsException" })
  vegetarianMealsException?: SustainableSourcingVegetarianMealsExceptionEnum;
}
