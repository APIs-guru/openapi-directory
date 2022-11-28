import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PoolsAdultPoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsHotTubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsIndoorPoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsIndoorPoolsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsLazyRiverExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsLifeguardExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsOutdoorPoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsOutdoorPoolsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsPoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsPoolsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsWadingPoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsWaterParkExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsWaterslideExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PoolsWavePoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Pools
/** 
 * Swimming pool or recreational water facilities available at the hotel.
**/
export class Pools extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adultPool" })
  adultPool?: boolean;

  @SpeakeasyMetadata({ data: "json, name=adultPoolException" })
  adultPoolException?: PoolsAdultPoolExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=hotTub" })
  hotTub?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hotTubException" })
  hotTubException?: PoolsHotTubExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=indoorPool" })
  indoorPool?: boolean;

  @SpeakeasyMetadata({ data: "json, name=indoorPoolException" })
  indoorPoolException?: PoolsIndoorPoolExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=indoorPoolsCount" })
  indoorPoolsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=indoorPoolsCountException" })
  indoorPoolsCountException?: PoolsIndoorPoolsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=lazyRiver" })
  lazyRiver?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lazyRiverException" })
  lazyRiverException?: PoolsLazyRiverExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=lifeguard" })
  lifeguard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lifeguardException" })
  lifeguardException?: PoolsLifeguardExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=outdoorPool" })
  outdoorPool?: boolean;

  @SpeakeasyMetadata({ data: "json, name=outdoorPoolException" })
  outdoorPoolException?: PoolsOutdoorPoolExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=outdoorPoolsCount" })
  outdoorPoolsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=outdoorPoolsCountException" })
  outdoorPoolsCountException?: PoolsOutdoorPoolsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=pool" })
  pool?: boolean;

  @SpeakeasyMetadata({ data: "json, name=poolException" })
  poolException?: PoolsPoolExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=poolsCount" })
  poolsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=poolsCountException" })
  poolsCountException?: PoolsPoolsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=wadingPool" })
  wadingPool?: boolean;

  @SpeakeasyMetadata({ data: "json, name=wadingPoolException" })
  wadingPoolException?: PoolsWadingPoolExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=waterPark" })
  waterPark?: boolean;

  @SpeakeasyMetadata({ data: "json, name=waterParkException" })
  waterParkException?: PoolsWaterParkExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=waterslide" })
  waterslide?: boolean;

  @SpeakeasyMetadata({ data: "json, name=waterslideException" })
  waterslideException?: PoolsWaterslideExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=wavePool" })
  wavePool?: boolean;

  @SpeakeasyMetadata({ data: "json, name=wavePoolException" })
  wavePoolException?: PoolsWavePoolExceptionEnum;
}
