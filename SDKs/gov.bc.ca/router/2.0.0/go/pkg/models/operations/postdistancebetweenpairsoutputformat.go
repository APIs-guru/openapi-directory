package operations

import (
"time")


type PostDistanceBetweenPairsOutputFormatOutputFormatEnum string

const (
    PostDistanceBetweenPairsOutputFormatOutputFormatEnumJSON PostDistanceBetweenPairsOutputFormatOutputFormatEnum = "json"
PostDistanceBetweenPairsOutputFormatOutputFormatEnumHTML PostDistanceBetweenPairsOutputFormatOutputFormatEnum = "html"
)


type PostDistanceBetweenPairsOutputFormatPathParams struct {
    OutputFormat PostDistanceBetweenPairsOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
    
}


type PostDistanceBetweenPairsOutputFormatCriteriaEnum string

const (
    PostDistanceBetweenPairsOutputFormatCriteriaEnumShortest PostDistanceBetweenPairsOutputFormatCriteriaEnum = "shortest"
PostDistanceBetweenPairsOutputFormatCriteriaEnumFastest PostDistanceBetweenPairsOutputFormatCriteriaEnum = "fastest"
)



type PostDistanceBetweenPairsOutputFormatDistanceUnitEnum string

const (
    PostDistanceBetweenPairsOutputFormatDistanceUnitEnumKm PostDistanceBetweenPairsOutputFormatDistanceUnitEnum = "km"
PostDistanceBetweenPairsOutputFormatDistanceUnitEnumMi PostDistanceBetweenPairsOutputFormatDistanceUnitEnum = "mi"
)


type PostDistanceBetweenPairsOutputFormatQueryParams struct {
    CorrectSide *bool `queryParam:"style=form,explode=true,name=correctSide"`
    Criteria *PostDistanceBetweenPairsOutputFormatCriteriaEnum `queryParam:"style=form,explode=true,name=criteria"`
    Departure *time.Time `queryParam:"style=form,explode=true,name=departure"`
    Disable *string `queryParam:"style=form,explode=true,name=disable"`
    DistanceUnit *PostDistanceBetweenPairsOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
    FromPoints string `queryParam:"style=form,explode=true,name=fromPoints"`
    MaxPairs *int64 `queryParam:"style=form,explode=true,name=maxPairs"`
    OutputSrs *int64 `queryParam:"style=form,explode=true,name=outputSRS"`
    RouteDescription *string `queryParam:"style=form,explode=true,name=routeDescription"`
    ToPoints string `queryParam:"style=form,explode=true,name=toPoints"`
    
}

type PostDistanceBetweenPairsOutputFormatRequest struct {
    PathParams PostDistanceBetweenPairsOutputFormatPathParams 
    QueryParams PostDistanceBetweenPairsOutputFormatQueryParams 
    
}

type PostDistanceBetweenPairsOutputFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

