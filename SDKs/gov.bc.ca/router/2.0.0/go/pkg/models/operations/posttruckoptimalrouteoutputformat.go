package operations

import (
"time")


type PostTruckOptimalRouteOutputFormatOutputFormatEnum string

const (
    PostTruckOptimalRouteOutputFormatOutputFormatEnumJSON PostTruckOptimalRouteOutputFormatOutputFormatEnum = "json"
PostTruckOptimalRouteOutputFormatOutputFormatEnumKml PostTruckOptimalRouteOutputFormatOutputFormatEnum = "kml"
PostTruckOptimalRouteOutputFormatOutputFormatEnumHTML PostTruckOptimalRouteOutputFormatOutputFormatEnum = "html"
)


type PostTruckOptimalRouteOutputFormatPathParams struct {
    OutputFormat PostTruckOptimalRouteOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}


type PostTruckOptimalRouteOutputFormatCriteriaEnum string

const (
    PostTruckOptimalRouteOutputFormatCriteriaEnumShortest PostTruckOptimalRouteOutputFormatCriteriaEnum = "shortest"
PostTruckOptimalRouteOutputFormatCriteriaEnumFastest PostTruckOptimalRouteOutputFormatCriteriaEnum = "fastest"
)



type PostTruckOptimalRouteOutputFormatDistanceUnitEnum string

const (
    PostTruckOptimalRouteOutputFormatDistanceUnitEnumKm PostTruckOptimalRouteOutputFormatDistanceUnitEnum = "km"
PostTruckOptimalRouteOutputFormatDistanceUnitEnumMi PostTruckOptimalRouteOutputFormatDistanceUnitEnum = "mi"
)


type PostTruckOptimalRouteOutputFormatQueryParams struct {
    CorrectSide *bool `queryParam:"style=form,explode=true,name=correctSide"`
    Criteria *PostTruckOptimalRouteOutputFormatCriteriaEnum `queryParam:"style=form,explode=true,name=criteria"`
    Departure *time.Time `queryParam:"style=form,explode=true,name=departure"`
    Disable *string `queryParam:"style=form,explode=true,name=disable"`
    DistanceUnit *PostTruckOptimalRouteOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    Points string `queryParam:"style=form,explode=true,name=points"`
    RoundTrip *bool `queryParam:"style=form,explode=true,name=roundTrip"`
    RouteDescription *string `queryParam:"style=form,explode=true,name=routeDescription"`
    
}

type PostTruckOptimalRouteOutputFormatRequest struct {
    PathParams PostTruckOptimalRouteOutputFormatPathParams 
    QueryParams PostTruckOptimalRouteOutputFormatQueryParams 
    
}

type PostTruckOptimalRouteOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

