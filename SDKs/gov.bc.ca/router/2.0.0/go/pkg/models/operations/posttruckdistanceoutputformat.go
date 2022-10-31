package operations

import (
"time")


type PostTruckDistanceOutputFormatOutputFormatEnum string

const (
    PostTruckDistanceOutputFormatOutputFormatEnumJSON PostTruckDistanceOutputFormatOutputFormatEnum = "json"
PostTruckDistanceOutputFormatOutputFormatEnumKml PostTruckDistanceOutputFormatOutputFormatEnum = "kml"
PostTruckDistanceOutputFormatOutputFormatEnumHTML PostTruckDistanceOutputFormatOutputFormatEnum = "html"
)


type PostTruckDistanceOutputFormatPathParams struct {
    OutputFormat PostTruckDistanceOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}


type PostTruckDistanceOutputFormatCriteriaEnum string

const (
    PostTruckDistanceOutputFormatCriteriaEnumShortest PostTruckDistanceOutputFormatCriteriaEnum = "shortest"
PostTruckDistanceOutputFormatCriteriaEnumFastest PostTruckDistanceOutputFormatCriteriaEnum = "fastest"
)



type PostTruckDistanceOutputFormatDistanceUnitEnum string

const (
    PostTruckDistanceOutputFormatDistanceUnitEnumKm PostTruckDistanceOutputFormatDistanceUnitEnum = "km"
PostTruckDistanceOutputFormatDistanceUnitEnumMi PostTruckDistanceOutputFormatDistanceUnitEnum = "mi"
)


type PostTruckDistanceOutputFormatQueryParams struct {
    CorrectSide *bool `queryParam:"style=form,explode=true,name=correctSide"`
    Criteria *PostTruckDistanceOutputFormatCriteriaEnum `queryParam:"style=form,explode=true,name=criteria"`
    Departure *time.Time `queryParam:"style=form,explode=true,name=departure"`
    Disable *string `queryParam:"style=form,explode=true,name=disable"`
    DistanceUnit *PostTruckDistanceOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    Points string `queryParam:"style=form,explode=true,name=points"`
    RoundTrip *bool `queryParam:"style=form,explode=true,name=roundTrip"`
    RouteDescription *string `queryParam:"style=form,explode=true,name=routeDescription"`
    
}

type PostTruckDistanceOutputFormatRequest struct {
    PathParams PostTruckDistanceOutputFormatPathParams 
    QueryParams PostTruckDistanceOutputFormatQueryParams 
    
}

type PostTruckDistanceOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

