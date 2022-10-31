package operations

import (
"time")


type GetOptimalDirectionsOutputFormatOutputFormatEnum string

const (
    GetOptimalDirectionsOutputFormatOutputFormatEnumJSON GetOptimalDirectionsOutputFormatOutputFormatEnum = "json"
GetOptimalDirectionsOutputFormatOutputFormatEnumKml GetOptimalDirectionsOutputFormatOutputFormatEnum = "kml"
GetOptimalDirectionsOutputFormatOutputFormatEnumHTML GetOptimalDirectionsOutputFormatOutputFormatEnum = "html"
)


type GetOptimalDirectionsOutputFormatPathParams struct {
    OutputFormat GetOptimalDirectionsOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}


type GetOptimalDirectionsOutputFormatCriteriaEnum string

const (
    GetOptimalDirectionsOutputFormatCriteriaEnumShortest GetOptimalDirectionsOutputFormatCriteriaEnum = "shortest"
GetOptimalDirectionsOutputFormatCriteriaEnumFastest GetOptimalDirectionsOutputFormatCriteriaEnum = "fastest"
)



type GetOptimalDirectionsOutputFormatDistanceUnitEnum string

const (
    GetOptimalDirectionsOutputFormatDistanceUnitEnumKm GetOptimalDirectionsOutputFormatDistanceUnitEnum = "km"
GetOptimalDirectionsOutputFormatDistanceUnitEnumMi GetOptimalDirectionsOutputFormatDistanceUnitEnum = "mi"
)


type GetOptimalDirectionsOutputFormatQueryParams struct {
    CorrectSide *bool `queryParam:"style=form,explode=true,name=correctSide"`
    Criteria *GetOptimalDirectionsOutputFormatCriteriaEnum `queryParam:"style=form,explode=true,name=criteria"`
    Departure *time.Time `queryParam:"style=form,explode=true,name=departure"`
    Disable *string `queryParam:"style=form,explode=true,name=disable"`
    DistanceUnit *GetOptimalDirectionsOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    Points string `queryParam:"style=form,explode=true,name=points"`
    RoundTrip *bool `queryParam:"style=form,explode=true,name=roundTrip"`
    RouteDescription *string `queryParam:"style=form,explode=true,name=routeDescription"`
    
}

type GetOptimalDirectionsOutputFormatRequest struct {
    PathParams GetOptimalDirectionsOutputFormatPathParams 
    QueryParams GetOptimalDirectionsOutputFormatQueryParams 
    
}

type GetOptimalDirectionsOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

