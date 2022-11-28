import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HousekeepingDailyHousekeepingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum HousekeepingHousekeepingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum HousekeepingTurndownServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Housekeeping
/** 
 * Conveniences provided in guest units to facilitate an easier, more comfortable stay.
**/
export class Housekeeping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dailyHousekeeping" })
  dailyHousekeeping?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dailyHousekeepingException" })
  dailyHousekeepingException?: HousekeepingDailyHousekeepingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=housekeepingAvailable" })
  housekeepingAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=housekeepingAvailableException" })
  housekeepingAvailableException?: HousekeepingHousekeepingAvailableExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=turndownService" })
  turndownService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=turndownServiceException" })
  turndownServiceException?: HousekeepingTurndownServiceExceptionEnum;
}
