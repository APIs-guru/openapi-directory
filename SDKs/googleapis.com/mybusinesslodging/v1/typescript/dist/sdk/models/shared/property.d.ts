import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PropertyBuiltYearExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PropertyFloorsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PropertyLastRenovatedYearExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PropertyRoomsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * General factual information about the property's physical structure and important dates.
**/
export declare class Property extends SpeakeasyBase {
    builtYear?: number;
    builtYearException?: PropertyBuiltYearExceptionEnum;
    floorsCount?: number;
    floorsCountException?: PropertyFloorsCountExceptionEnum;
    lastRenovatedYear?: number;
    lastRenovatedYearException?: PropertyLastRenovatedYearExceptionEnum;
    roomsCount?: number;
    roomsCountException?: PropertyRoomsCountExceptionEnum;
}
