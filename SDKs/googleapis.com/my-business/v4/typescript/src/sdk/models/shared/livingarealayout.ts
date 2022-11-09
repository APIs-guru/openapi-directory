import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LivingAreaLayoutBalconyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaLayoutLivingAreaSqMetersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaLayoutLoftExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaLayoutNonSmokingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaLayoutPatioExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaLayoutStairsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// LivingAreaLayout
/** 
 * Information about the layout of the living area.
**/
export class LivingAreaLayout extends SpeakeasyBase {
  @Metadata({ data: "json, name=balcony" })
  balcony?: boolean;

  @Metadata({ data: "json, name=balconyException" })
  balconyException?: LivingAreaLayoutBalconyExceptionEnum;

  @Metadata({ data: "json, name=livingAreaSqMeters" })
  livingAreaSqMeters?: number;

  @Metadata({ data: "json, name=livingAreaSqMetersException" })
  livingAreaSqMetersException?: LivingAreaLayoutLivingAreaSqMetersExceptionEnum;

  @Metadata({ data: "json, name=loft" })
  loft?: boolean;

  @Metadata({ data: "json, name=loftException" })
  loftException?: LivingAreaLayoutLoftExceptionEnum;

  @Metadata({ data: "json, name=nonSmoking" })
  nonSmoking?: boolean;

  @Metadata({ data: "json, name=nonSmokingException" })
  nonSmokingException?: LivingAreaLayoutNonSmokingExceptionEnum;

  @Metadata({ data: "json, name=patio" })
  patio?: boolean;

  @Metadata({ data: "json, name=patioException" })
  patioException?: LivingAreaLayoutPatioExceptionEnum;

  @Metadata({ data: "json, name=stairs" })
  stairs?: boolean;

  @Metadata({ data: "json, name=stairsException" })
  stairsException?: LivingAreaLayoutStairsExceptionEnum;
}
