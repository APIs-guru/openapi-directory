package operations

import (
"time")


type GetDirectionsOutputFormatOutputFormatEnum string

const (
    GetDirectionsOutputFormatOutputFormatEnumJSON GetDirectionsOutputFormatOutputFormatEnum = "json"
GetDirectionsOutputFormatOutputFormatEnumKml GetDirectionsOutputFormatOutputFormatEnum = "kml"
GetDirectionsOutputFormatOutputFormatEnumHTML GetDirectionsOutputFormatOutputFormatEnum = "html"
)


type GetDirectionsOutputFormatPathParams struct {
    OutputFormat GetDirectionsOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}


type GetDirectionsOutputFormatCriteriaEnum string

const (
    GetDirectionsOutputFormatCriteriaEnumShortest GetDirectionsOutputFormatCriteriaEnum = "shortest"
GetDirectionsOutputFormatCriteriaEnumFastest GetDirectionsOutputFormatCriteriaEnum = "fastest"
)



type GetDirectionsOutputFormatDistanceUnitEnum string

const (
    GetDirectionsOutputFormatDistanceUnitEnumKm GetDirectionsOutputFormatDistanceUnitEnum = "km"
GetDirectionsOutputFormatDistanceUnitEnumMi GetDirectionsOutputFormatDistanceUnitEnum = "mi"
)


type GetDirectionsOutputFormatQueryParams struct {
    CorrectSide *bool `queryParam:"style=form,explode=true,name=correctSide"`
    Criteria *GetDirectionsOutputFormatCriteriaEnum `queryParam:"style=form,explode=true,name=criteria"`
    Departure *time.Time `queryParam:"style=form,explode=true,name=departure"`
    Disable *string `queryParam:"style=form,explode=true,name=disable"`
    DistanceUnit *GetDirectionsOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    Points string `queryParam:"style=form,explode=true,name=points"`
    RoundTrip *bool `queryParam:"style=form,explode=true,name=roundTrip"`
    RouteDescription *string `queryParam:"style=form,explode=true,name=routeDescription"`
    
}

type GetDirectionsOutputFormatRequest struct {
    PathParams GetDirectionsOutputFormatPathParams 
    QueryParams GetDirectionsOutputFormatQueryParams 
    
}

type GetDirectionsOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

