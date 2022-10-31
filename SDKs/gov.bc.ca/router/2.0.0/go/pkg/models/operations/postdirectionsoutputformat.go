package operations

import (
"time")


type PostDirectionsOutputFormatOutputFormatEnum string

const (
    PostDirectionsOutputFormatOutputFormatEnumJSON PostDirectionsOutputFormatOutputFormatEnum = "json"
PostDirectionsOutputFormatOutputFormatEnumKml PostDirectionsOutputFormatOutputFormatEnum = "kml"
PostDirectionsOutputFormatOutputFormatEnumHTML PostDirectionsOutputFormatOutputFormatEnum = "html"
)


type PostDirectionsOutputFormatPathParams struct {
    OutputFormat PostDirectionsOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}


type PostDirectionsOutputFormatCriteriaEnum string

const (
    PostDirectionsOutputFormatCriteriaEnumShortest PostDirectionsOutputFormatCriteriaEnum = "shortest"
PostDirectionsOutputFormatCriteriaEnumFastest PostDirectionsOutputFormatCriteriaEnum = "fastest"
)



type PostDirectionsOutputFormatDistanceUnitEnum string

const (
    PostDirectionsOutputFormatDistanceUnitEnumKm PostDirectionsOutputFormatDistanceUnitEnum = "km"
PostDirectionsOutputFormatDistanceUnitEnumMi PostDirectionsOutputFormatDistanceUnitEnum = "mi"
)


type PostDirectionsOutputFormatQueryParams struct {
    CorrectSide *bool `queryParam:"style=form,explode=true,name=correctSide"`
    Criteria *PostDirectionsOutputFormatCriteriaEnum `queryParam:"style=form,explode=true,name=criteria"`
    Departure *time.Time `queryParam:"style=form,explode=true,name=departure"`
    Disable *string `queryParam:"style=form,explode=true,name=disable"`
    DistanceUnit *PostDirectionsOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    Points string `queryParam:"style=form,explode=true,name=points"`
    RoundTrip *bool `queryParam:"style=form,explode=true,name=roundTrip"`
    RouteDescription *string `queryParam:"style=form,explode=true,name=routeDescription"`
    
}

type PostDirectionsOutputFormatRequest struct {
    PathParams PostDirectionsOutputFormatPathParams 
    QueryParams PostDirectionsOutputFormatQueryParams 
    
}

type PostDirectionsOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

