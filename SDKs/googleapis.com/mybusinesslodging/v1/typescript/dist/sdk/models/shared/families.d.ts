import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FamiliesBabysittingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum FamiliesKidsActivitiesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum FamiliesKidsClubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum FamiliesKidsFriendlyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Services and amenities for families and young guests.
**/
export declare class Families extends SpeakeasyBase {
    babysitting?: boolean;
    babysittingException?: FamiliesBabysittingExceptionEnum;
    kidsActivities?: boolean;
    kidsActivitiesException?: FamiliesKidsActivitiesExceptionEnum;
    kidsClub?: boolean;
    kidsClubException?: FamiliesKidsClubExceptionEnum;
    kidsFriendly?: boolean;
    kidsFriendlyException?: FamiliesKidsFriendlyExceptionEnum;
}
