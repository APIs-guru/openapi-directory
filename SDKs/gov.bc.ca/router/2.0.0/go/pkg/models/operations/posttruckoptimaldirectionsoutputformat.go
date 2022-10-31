package operations

import (
"time")


type PostTruckOptimalDirectionsOutputFormatOutputFormatEnum string

const (
    PostTruckOptimalDirectionsOutputFormatOutputFormatEnumJSON PostTruckOptimalDirectionsOutputFormatOutputFormatEnum = "json"
PostTruckOptimalDirectionsOutputFormatOutputFormatEnumKml PostTruckOptimalDirectionsOutputFormatOutputFormatEnum = "kml"
PostTruckOptimalDirectionsOutputFormatOutputFormatEnumHTML PostTruckOptimalDirectionsOutputFormatOutputFormatEnum = "html"
)


type PostTruckOptimalDirectionsOutputFormatPathParams struct {
    OutputFormat PostTruckOptimalDirectionsOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}


type PostTruckOptimalDirectionsOutputFormatCriteriaEnum string

const (
    PostTruckOptimalDirectionsOutputFormatCriteriaEnumShortest PostTruckOptimalDirectionsOutputFormatCriteriaEnum = "shortest"
PostTruckOptimalDirectionsOutputFormatCriteriaEnumFastest PostTruckOptimalDirectionsOutputFormatCriteriaEnum = "fastest"
)



type PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum string

const (
    PostTruckOptimalDirectionsOutputFormatDistanceUnitEnumKm PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum = "km"
PostTruckOptimalDirectionsOutputFormatDistanceUnitEnumMi PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum = "mi"
)


type PostTruckOptimalDirectionsOutputFormatQueryParams struct {
    CorrectSide *bool `queryParam:"style=form,explode=true,name=correctSide"`
    Criteria *PostTruckOptimalDirectionsOutputFormatCriteriaEnum `queryParam:"style=form,explode=true,name=criteria"`
    Departure *time.Time `queryParam:"style=form,explode=true,name=departure"`
    Disable *string `queryParam:"style=form,explode=true,name=disable"`
    DistanceUnit *PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    Points string `queryParam:"style=form,explode=true,name=points"`
    RoundTrip *bool `queryParam:"style=form,explode=true,name=roundTrip"`
    RouteDescription *string `queryParam:"style=form,explode=true,name=routeDescription"`
    
}

type PostTruckOptimalDirectionsOutputFormatRequest struct {
    PathParams PostTruckOptimalDirectionsOutputFormatPathParams 
    QueryParams PostTruckOptimalDirectionsOutputFormatQueryParams 
    
}

type PostTruckOptimalDirectionsOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

