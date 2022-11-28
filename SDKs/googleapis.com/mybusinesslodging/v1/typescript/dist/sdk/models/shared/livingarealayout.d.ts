import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LivingAreaLayoutBalconyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaLayoutLivingAreaSqMetersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaLayoutLoftExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaLayoutNonSmokingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaLayoutPatioExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaLayoutStairsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Information about the layout of the living area.
**/
export declare class LivingAreaLayout extends SpeakeasyBase {
    balcony?: boolean;
    balconyException?: LivingAreaLayoutBalconyExceptionEnum;
    livingAreaSqMeters?: number;
    livingAreaSqMetersException?: LivingAreaLayoutLivingAreaSqMetersExceptionEnum;
    loft?: boolean;
    loftException?: LivingAreaLayoutLoftExceptionEnum;
    nonSmoking?: boolean;
    nonSmokingException?: LivingAreaLayoutNonSmokingExceptionEnum;
    patio?: boolean;
    patioException?: LivingAreaLayoutPatioExceptionEnum;
    stairs?: boolean;
    stairsException?: LivingAreaLayoutStairsExceptionEnum;
}
