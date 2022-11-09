import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PropertyBuiltYearExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PropertyFloorsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PropertyLastRenovatedYearExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PropertyRoomsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Property
/** 
 * General factual information about the property's physical structure and important dates.
**/
export class Property extends SpeakeasyBase {
  @Metadata({ data: "json, name=builtYear" })
  builtYear?: number;

  @Metadata({ data: "json, name=builtYearException" })
  builtYearException?: PropertyBuiltYearExceptionEnum;

  @Metadata({ data: "json, name=floorsCount" })
  floorsCount?: number;

  @Metadata({ data: "json, name=floorsCountException" })
  floorsCountException?: PropertyFloorsCountExceptionEnum;

  @Metadata({ data: "json, name=lastRenovatedYear" })
  lastRenovatedYear?: number;

  @Metadata({ data: "json, name=lastRenovatedYearException" })
  lastRenovatedYearException?: PropertyLastRenovatedYearExceptionEnum;

  @Metadata({ data: "json, name=roomsCount" })
  roomsCount?: number;

  @Metadata({ data: "json, name=roomsCountException" })
  roomsCountException?: PropertyRoomsCountExceptionEnum;
}
