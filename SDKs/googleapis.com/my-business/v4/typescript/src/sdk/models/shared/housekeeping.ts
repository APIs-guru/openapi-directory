import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HousekeepingDailyHousekeepingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum HousekeepingHousekeepingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum HousekeepingTurndownServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Housekeeping
/** 
 * Conveniences provided in guest units to facilitate an easier, more comfortable stay.
**/
export class Housekeeping extends SpeakeasyBase {
  @Metadata({ data: "json, name=dailyHousekeeping" })
  dailyHousekeeping?: boolean;

  @Metadata({ data: "json, name=dailyHousekeepingException" })
  dailyHousekeepingException?: HousekeepingDailyHousekeepingExceptionEnum;

  @Metadata({ data: "json, name=housekeepingAvailable" })
  housekeepingAvailable?: boolean;

  @Metadata({ data: "json, name=housekeepingAvailableException" })
  housekeepingAvailableException?: HousekeepingHousekeepingAvailableExceptionEnum;

  @Metadata({ data: "json, name=turndownService" })
  turndownService?: boolean;

  @Metadata({ data: "json, name=turndownServiceException" })
  turndownServiceException?: HousekeepingTurndownServiceExceptionEnum;
}
