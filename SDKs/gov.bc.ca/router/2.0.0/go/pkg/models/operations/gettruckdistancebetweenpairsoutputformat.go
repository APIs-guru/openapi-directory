package operations

import (
	"time"
)

type GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum string

const (
	GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnumJSON GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum = "json"
	GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnumHTML GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum = "html"
)

type GetTruckDistanceBetweenPairsOutputFormatPathParams struct {
	OutputFormat GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum string

const (
	GetTruckDistanceBetweenPairsOutputFormatCriteriaEnumShortest GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum = "shortest"
	GetTruckDistanceBetweenPairsOutputFormatCriteriaEnumFastest  GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum = "fastest"
)

type GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum string

const (
	GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnumKm GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum = "km"
	GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnumMi GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum = "mi"
)

type GetTruckDistanceBetweenPairsOutputFormatQueryParams struct {
	CorrectSide      *bool                                                     `queryParam:"style=form,explode=true,name=correctSide"`
	Criteria         *GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum     `queryParam:"style=form,explode=true,name=criteria"`
	Departure        *time.Time                                                `queryParam:"style=form,explode=true,name=departure"`
	Disable          *string                                                   `queryParam:"style=form,explode=true,name=disable"`
	DistanceUnit     *GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
	FromPoints       string                                                    `queryParam:"style=form,explode=true,name=fromPoints"`
	MaxPairs         *int64                                                    `queryParam:"style=form,explode=true,name=maxPairs"`
	OutputSrs        *int64                                                    `queryParam:"style=form,explode=true,name=outputSRS"`
	RouteDescription *string                                                   `queryParam:"style=form,explode=true,name=routeDescription"`
	ToPoints         string                                                    `queryParam:"style=form,explode=true,name=toPoints"`
}

type GetTruckDistanceBetweenPairsOutputFormatRequest struct {
	PathParams  GetTruckDistanceBetweenPairsOutputFormatPathParams
	QueryParams GetTruckDistanceBetweenPairsOutputFormatQueryParams
}

type GetTruckDistanceBetweenPairsOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
