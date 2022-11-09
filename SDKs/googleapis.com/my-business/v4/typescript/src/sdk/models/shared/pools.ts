import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PoolsAdultPoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsHotTubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsIndoorPoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsIndoorPoolsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsLazyRiverExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsLifeguardExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsOutdoorPoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsOutdoorPoolsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsPoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsPoolsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsWadingPoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsWaterParkExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsWaterslideExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsWavePoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Pools
/** 
 * Swimming pool or recreational water facilities available at the hotel.
**/
export class Pools extends SpeakeasyBase {
  @Metadata({ data: "json, name=adultPool" })
  adultPool?: boolean;

  @Metadata({ data: "json, name=adultPoolException" })
  adultPoolException?: PoolsAdultPoolExceptionEnum;

  @Metadata({ data: "json, name=hotTub" })
  hotTub?: boolean;

  @Metadata({ data: "json, name=hotTubException" })
  hotTubException?: PoolsHotTubExceptionEnum;

  @Metadata({ data: "json, name=indoorPool" })
  indoorPool?: boolean;

  @Metadata({ data: "json, name=indoorPoolException" })
  indoorPoolException?: PoolsIndoorPoolExceptionEnum;

  @Metadata({ data: "json, name=indoorPoolsCount" })
  indoorPoolsCount?: number;

  @Metadata({ data: "json, name=indoorPoolsCountException" })
  indoorPoolsCountException?: PoolsIndoorPoolsCountExceptionEnum;

  @Metadata({ data: "json, name=lazyRiver" })
  lazyRiver?: boolean;

  @Metadata({ data: "json, name=lazyRiverException" })
  lazyRiverException?: PoolsLazyRiverExceptionEnum;

  @Metadata({ data: "json, name=lifeguard" })
  lifeguard?: boolean;

  @Metadata({ data: "json, name=lifeguardException" })
  lifeguardException?: PoolsLifeguardExceptionEnum;

  @Metadata({ data: "json, name=outdoorPool" })
  outdoorPool?: boolean;

  @Metadata({ data: "json, name=outdoorPoolException" })
  outdoorPoolException?: PoolsOutdoorPoolExceptionEnum;

  @Metadata({ data: "json, name=outdoorPoolsCount" })
  outdoorPoolsCount?: number;

  @Metadata({ data: "json, name=outdoorPoolsCountException" })
  outdoorPoolsCountException?: PoolsOutdoorPoolsCountExceptionEnum;

  @Metadata({ data: "json, name=pool" })
  pool?: boolean;

  @Metadata({ data: "json, name=poolException" })
  poolException?: PoolsPoolExceptionEnum;

  @Metadata({ data: "json, name=poolsCount" })
  poolsCount?: number;

  @Metadata({ data: "json, name=poolsCountException" })
  poolsCountException?: PoolsPoolsCountExceptionEnum;

  @Metadata({ data: "json, name=wadingPool" })
  wadingPool?: boolean;

  @Metadata({ data: "json, name=wadingPoolException" })
  wadingPoolException?: PoolsWadingPoolExceptionEnum;

  @Metadata({ data: "json, name=waterPark" })
  waterPark?: boolean;

  @Metadata({ data: "json, name=waterParkException" })
  waterParkException?: PoolsWaterParkExceptionEnum;

  @Metadata({ data: "json, name=waterslide" })
  waterslide?: boolean;

  @Metadata({ data: "json, name=waterslideException" })
  waterslideException?: PoolsWaterslideExceptionEnum;

  @Metadata({ data: "json, name=wavePool" })
  wavePool?: boolean;

  @Metadata({ data: "json, name=wavePoolException" })
  wavePoolException?: PoolsWavePoolExceptionEnum;
}
