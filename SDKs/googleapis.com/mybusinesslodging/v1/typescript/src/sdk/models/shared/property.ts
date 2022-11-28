import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PropertyBuiltYearExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PropertyFloorsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PropertyLastRenovatedYearExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PropertyRoomsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Property
/** 
 * General factual information about the property's physical structure and important dates.
**/
export class Property extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builtYear" })
  builtYear?: number;

  @SpeakeasyMetadata({ data: "json, name=builtYearException" })
  builtYearException?: PropertyBuiltYearExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=floorsCount" })
  floorsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=floorsCountException" })
  floorsCountException?: PropertyFloorsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=lastRenovatedYear" })
  lastRenovatedYear?: number;

  @SpeakeasyMetadata({ data: "json, name=lastRenovatedYearException" })
  lastRenovatedYearException?: PropertyLastRenovatedYearExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=roomsCount" })
  roomsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=roomsCountException" })
  roomsCountException?: PropertyRoomsCountExceptionEnum;
}
