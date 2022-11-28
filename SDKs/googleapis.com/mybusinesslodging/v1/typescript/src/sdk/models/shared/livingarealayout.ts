import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LivingAreaLayoutBalconyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaLayoutLivingAreaSqMetersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaLayoutLoftExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaLayoutNonSmokingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaLayoutPatioExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaLayoutStairsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// LivingAreaLayout
/** 
 * Information about the layout of the living area.
**/
export class LivingAreaLayout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balcony" })
  balcony?: boolean;

  @SpeakeasyMetadata({ data: "json, name=balconyException" })
  balconyException?: LivingAreaLayoutBalconyExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=livingAreaSqMeters" })
  livingAreaSqMeters?: number;

  @SpeakeasyMetadata({ data: "json, name=livingAreaSqMetersException" })
  livingAreaSqMetersException?: LivingAreaLayoutLivingAreaSqMetersExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=loft" })
  loft?: boolean;

  @SpeakeasyMetadata({ data: "json, name=loftException" })
  loftException?: LivingAreaLayoutLoftExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=nonSmoking" })
  nonSmoking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nonSmokingException" })
  nonSmokingException?: LivingAreaLayoutNonSmokingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=patio" })
  patio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=patioException" })
  patioException?: LivingAreaLayoutPatioExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=stairs" })
  stairs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stairsException" })
  stairsException?: LivingAreaLayoutStairsExceptionEnum;
}
