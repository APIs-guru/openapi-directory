package shared




type PropertyBuiltYearExceptionEnum string

const (
    PropertyBuiltYearExceptionEnumExceptionUnspecified PropertyBuiltYearExceptionEnum = "EXCEPTION_UNSPECIFIED"
PropertyBuiltYearExceptionEnumUnderConstruction PropertyBuiltYearExceptionEnum = "UNDER_CONSTRUCTION"
PropertyBuiltYearExceptionEnumDependentOnSeason PropertyBuiltYearExceptionEnum = "DEPENDENT_ON_SEASON"
PropertyBuiltYearExceptionEnumDependentOnDayOfWeek PropertyBuiltYearExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)



type PropertyFloorsCountExceptionEnum string

const (
    PropertyFloorsCountExceptionEnumExceptionUnspecified PropertyFloorsCountExceptionEnum = "EXCEPTION_UNSPECIFIED"
PropertyFloorsCountExceptionEnumUnderConstruction PropertyFloorsCountExceptionEnum = "UNDER_CONSTRUCTION"
PropertyFloorsCountExceptionEnumDependentOnSeason PropertyFloorsCountExceptionEnum = "DEPENDENT_ON_SEASON"
PropertyFloorsCountExceptionEnumDependentOnDayOfWeek PropertyFloorsCountExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)



type PropertyLastRenovatedYearExceptionEnum string

const (
    PropertyLastRenovatedYearExceptionEnumExceptionUnspecified PropertyLastRenovatedYearExceptionEnum = "EXCEPTION_UNSPECIFIED"
PropertyLastRenovatedYearExceptionEnumUnderConstruction PropertyLastRenovatedYearExceptionEnum = "UNDER_CONSTRUCTION"
PropertyLastRenovatedYearExceptionEnumDependentOnSeason PropertyLastRenovatedYearExceptionEnum = "DEPENDENT_ON_SEASON"
PropertyLastRenovatedYearExceptionEnumDependentOnDayOfWeek PropertyLastRenovatedYearExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)



type PropertyRoomsCountExceptionEnum string

const (
    PropertyRoomsCountExceptionEnumExceptionUnspecified PropertyRoomsCountExceptionEnum = "EXCEPTION_UNSPECIFIED"
PropertyRoomsCountExceptionEnumUnderConstruction PropertyRoomsCountExceptionEnum = "UNDER_CONSTRUCTION"
PropertyRoomsCountExceptionEnumDependentOnSeason PropertyRoomsCountExceptionEnum = "DEPENDENT_ON_SEASON"
PropertyRoomsCountExceptionEnumDependentOnDayOfWeek PropertyRoomsCountExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)


type Property struct {
    BuiltYear *int32 `json:"builtYear,omitempty"`
    BuiltYearException *PropertyBuiltYearExceptionEnum `json:"builtYearException,omitempty"`
    FloorsCount *int32 `json:"floorsCount,omitempty"`
    FloorsCountException *PropertyFloorsCountExceptionEnum `json:"floorsCountException,omitempty"`
    LastRenovatedYear *int32 `json:"lastRenovatedYear,omitempty"`
    LastRenovatedYearException *PropertyLastRenovatedYearExceptionEnum `json:"lastRenovatedYearException,omitempty"`
    RoomsCount *int32 `json:"roomsCount,omitempty"`
    RoomsCountException *PropertyRoomsCountExceptionEnum `json:"roomsCountException,omitempty"`
    
}

