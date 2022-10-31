package operations

import (
"time")


type PostOptimalRouteOutputFormatOutputFormatEnum string

const (
    PostOptimalRouteOutputFormatOutputFormatEnumJSON PostOptimalRouteOutputFormatOutputFormatEnum = "json"
PostOptimalRouteOutputFormatOutputFormatEnumKml PostOptimalRouteOutputFormatOutputFormatEnum = "kml"
PostOptimalRouteOutputFormatOutputFormatEnumHTML PostOptimalRouteOutputFormatOutputFormatEnum = "html"
)


type PostOptimalRouteOutputFormatPathParams struct {
    OutputFormat PostOptimalRouteOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}


type PostOptimalRouteOutputFormatCriteriaEnum string

const (
    PostOptimalRouteOutputFormatCriteriaEnumShortest PostOptimalRouteOutputFormatCriteriaEnum = "shortest"
PostOptimalRouteOutputFormatCriteriaEnumFastest PostOptimalRouteOutputFormatCriteriaEnum = "fastest"
)



type PostOptimalRouteOutputFormatDistanceUnitEnum string

const (
    PostOptimalRouteOutputFormatDistanceUnitEnumKm PostOptimalRouteOutputFormatDistanceUnitEnum = "km"
PostOptimalRouteOutputFormatDistanceUnitEnumMi PostOptimalRouteOutputFormatDistanceUnitEnum = "mi"
)


type PostOptimalRouteOutputFormatQueryParams struct {
    CorrectSide *bool `queryParam:"style=form,explode=true,name=correctSide"`
    Criteria *PostOptimalRouteOutputFormatCriteriaEnum `queryParam:"style=form,explode=true,name=criteria"`
    Departure *time.Time `queryParam:"style=form,explode=true,name=departure"`
    Disable *string `queryParam:"style=form,explode=true,name=disable"`
    DistanceUnit *PostOptimalRouteOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    Points string `queryParam:"style=form,explode=true,name=points"`
    RoundTrip *bool `queryParam:"style=form,explode=true,name=roundTrip"`
    RouteDescription *string `queryParam:"style=form,explode=true,name=routeDescription"`
    
}

type PostOptimalRouteOutputFormatRequest struct {
    PathParams PostOptimalRouteOutputFormatPathParams 
    QueryParams PostOptimalRouteOutputFormatQueryParams 
    
}

type PostOptimalRouteOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

