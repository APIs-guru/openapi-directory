package operations

import (
"time")


type PostRouteOutputFormatOutputFormatEnum string

const (
    PostRouteOutputFormatOutputFormatEnumJSON PostRouteOutputFormatOutputFormatEnum = "json"
PostRouteOutputFormatOutputFormatEnumKml PostRouteOutputFormatOutputFormatEnum = "kml"
PostRouteOutputFormatOutputFormatEnumHTML PostRouteOutputFormatOutputFormatEnum = "html"
)


type PostRouteOutputFormatPathParams struct {
    OutputFormat PostRouteOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}


type PostRouteOutputFormatCriteriaEnum string

const (
    PostRouteOutputFormatCriteriaEnumShortest PostRouteOutputFormatCriteriaEnum = "shortest"
PostRouteOutputFormatCriteriaEnumFastest PostRouteOutputFormatCriteriaEnum = "fastest"
)



type PostRouteOutputFormatDistanceUnitEnum string

const (
    PostRouteOutputFormatDistanceUnitEnumKm PostRouteOutputFormatDistanceUnitEnum = "km"
PostRouteOutputFormatDistanceUnitEnumMi PostRouteOutputFormatDistanceUnitEnum = "mi"
)


type PostRouteOutputFormatQueryParams struct {
    CorrectSide *bool `queryParam:"style=form,explode=true,name=correctSide"`
    Criteria *PostRouteOutputFormatCriteriaEnum `queryParam:"style=form,explode=true,name=criteria"`
    Departure *time.Time `queryParam:"style=form,explode=true,name=departure"`
    Disable *string `queryParam:"style=form,explode=true,name=disable"`
    DistanceUnit *PostRouteOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    Points string `queryParam:"style=form,explode=true,name=points"`
    RoundTrip *bool `queryParam:"style=form,explode=true,name=roundTrip"`
    RouteDescription *string `queryParam:"style=form,explode=true,name=routeDescription"`
    
}

type PostRouteOutputFormatRequest struct {
    PathParams PostRouteOutputFormatPathParams 
    QueryParams PostRouteOutputFormatQueryParams 
    
}

type PostRouteOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

