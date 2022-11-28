import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PetsCatsAllowedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PetsDogsAllowedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PetsPetsAllowedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PetsPetsAllowedFreeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Policies regarding guest-owned animals.
**/
export declare class Pets extends SpeakeasyBase {
    catsAllowed?: boolean;
    catsAllowedException?: PetsCatsAllowedExceptionEnum;
    dogsAllowed?: boolean;
    dogsAllowedException?: PetsDogsAllowedExceptionEnum;
    petsAllowed?: boolean;
    petsAllowedException?: PetsPetsAllowedExceptionEnum;
    petsAllowedFree?: boolean;
    petsAllowedFreeException?: PetsPetsAllowedFreeExceptionEnum;
}
