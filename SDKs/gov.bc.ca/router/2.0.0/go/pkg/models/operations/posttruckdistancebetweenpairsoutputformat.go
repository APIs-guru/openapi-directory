package operations

import (
	"time"
)

type PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum string

const (
	PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnumJSON PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum = "json"
	PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnumHTML PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum = "html"
)

type PostTruckDistanceBetweenPairsOutputFormatPathParams struct {
	OutputFormat PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum string

const (
	PostTruckDistanceBetweenPairsOutputFormatCriteriaEnumShortest PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum = "shortest"
	PostTruckDistanceBetweenPairsOutputFormatCriteriaEnumFastest  PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum = "fastest"
)

type PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum string

const (
	PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnumKm PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum = "km"
	PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnumMi PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum = "mi"
)

type PostTruckDistanceBetweenPairsOutputFormatQueryParams struct {
	CorrectSide      *bool                                                      `queryParam:"style=form,explode=true,name=correctSide"`
	Criteria         *PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum     `queryParam:"style=form,explode=true,name=criteria"`
	Departure        *time.Time                                                 `queryParam:"style=form,explode=true,name=departure"`
	Disable          *string                                                    `queryParam:"style=form,explode=true,name=disable"`
	DistanceUnit     *PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
	FromPoints       string                                                     `queryParam:"style=form,explode=true,name=fromPoints"`
	MaxPairs         *int64                                                     `queryParam:"style=form,explode=true,name=maxPairs"`
	OutputSrs        *int64                                                     `queryParam:"style=form,explode=true,name=outputSRS"`
	RouteDescription *string                                                    `queryParam:"style=form,explode=true,name=routeDescription"`
	ToPoints         string                                                     `queryParam:"style=form,explode=true,name=toPoints"`
}

type PostTruckDistanceBetweenPairsOutputFormatRequest struct {
	PathParams  PostTruckDistanceBetweenPairsOutputFormatPathParams
	QueryParams PostTruckDistanceBetweenPairsOutputFormatQueryParams
}

type PostTruckDistanceBetweenPairsOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
