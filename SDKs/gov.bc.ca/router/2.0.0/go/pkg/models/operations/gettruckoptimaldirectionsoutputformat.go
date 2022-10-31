package operations

import (
"time")


type GetTruckOptimalDirectionsOutputFormatOutputFormatEnum string

const (
    GetTruckOptimalDirectionsOutputFormatOutputFormatEnumJSON GetTruckOptimalDirectionsOutputFormatOutputFormatEnum = "json"
GetTruckOptimalDirectionsOutputFormatOutputFormatEnumKml GetTruckOptimalDirectionsOutputFormatOutputFormatEnum = "kml"
GetTruckOptimalDirectionsOutputFormatOutputFormatEnumHTML GetTruckOptimalDirectionsOutputFormatOutputFormatEnum = "html"
)


type GetTruckOptimalDirectionsOutputFormatPathParams struct {
    OutputFormat GetTruckOptimalDirectionsOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}


type GetTruckOptimalDirectionsOutputFormatCriteriaEnum string

const (
    GetTruckOptimalDirectionsOutputFormatCriteriaEnumShortest GetTruckOptimalDirectionsOutputFormatCriteriaEnum = "shortest"
GetTruckOptimalDirectionsOutputFormatCriteriaEnumFastest GetTruckOptimalDirectionsOutputFormatCriteriaEnum = "fastest"
)



type GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum string

const (
    GetTruckOptimalDirectionsOutputFormatDistanceUnitEnumKm GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum = "km"
GetTruckOptimalDirectionsOutputFormatDistanceUnitEnumMi GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum = "mi"
)


type GetTruckOptimalDirectionsOutputFormatQueryParams struct {
    CorrectSide *bool `queryParam:"style=form,explode=true,name=correctSide"`
    Criteria *GetTruckOptimalDirectionsOutputFormatCriteriaEnum `queryParam:"style=form,explode=true,name=criteria"`
    Departure *time.Time `queryParam:"style=form,explode=true,name=departure"`
    Disable *string `queryParam:"style=form,explode=true,name=disable"`
    DistanceUnit *GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    Points string `queryParam:"style=form,explode=true,name=points"`
    RoundTrip *bool `queryParam:"style=form,explode=true,name=roundTrip"`
    RouteDescription *string `queryParam:"style=form,explode=true,name=routeDescription"`
    
}

type GetTruckOptimalDirectionsOutputFormatRequest struct {
    PathParams GetTruckOptimalDirectionsOutputFormatPathParams 
    QueryParams GetTruckOptimalDirectionsOutputFormatQueryParams 
    
}

type GetTruckOptimalDirectionsOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

