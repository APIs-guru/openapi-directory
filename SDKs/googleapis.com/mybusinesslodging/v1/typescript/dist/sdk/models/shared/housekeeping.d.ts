import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HousekeepingDailyHousekeepingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum HousekeepingHousekeepingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum HousekeepingTurndownServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Conveniences provided in guest units to facilitate an easier, more comfortable stay.
**/
export declare class Housekeeping extends SpeakeasyBase {
    dailyHousekeeping?: boolean;
    dailyHousekeepingException?: HousekeepingDailyHousekeepingExceptionEnum;
    housekeepingAvailable?: boolean;
    housekeepingAvailableException?: HousekeepingHousekeepingAvailableExceptionEnum;
    turndownService?: boolean;
    turndownServiceException?: HousekeepingTurndownServiceExceptionEnum;
}
