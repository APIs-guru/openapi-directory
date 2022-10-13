package operations

import (
	"time"
)

type GetDistanceBetweenPairsOutputFormatOutputFormatEnum string

const (
	GetDistanceBetweenPairsOutputFormatOutputFormatEnumJSON GetDistanceBetweenPairsOutputFormatOutputFormatEnum = "json"
	GetDistanceBetweenPairsOutputFormatOutputFormatEnumHTML GetDistanceBetweenPairsOutputFormatOutputFormatEnum = "html"
)

type GetDistanceBetweenPairsOutputFormatPathParams struct {
	OutputFormat GetDistanceBetweenPairsOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetDistanceBetweenPairsOutputFormatCriteriaEnum string

const (
	GetDistanceBetweenPairsOutputFormatCriteriaEnumShortest GetDistanceBetweenPairsOutputFormatCriteriaEnum = "shortest"
	GetDistanceBetweenPairsOutputFormatCriteriaEnumFastest  GetDistanceBetweenPairsOutputFormatCriteriaEnum = "fastest"
)

type GetDistanceBetweenPairsOutputFormatDistanceUnitEnum string

const (
	GetDistanceBetweenPairsOutputFormatDistanceUnitEnumKm GetDistanceBetweenPairsOutputFormatDistanceUnitEnum = "km"
	GetDistanceBetweenPairsOutputFormatDistanceUnitEnumMi GetDistanceBetweenPairsOutputFormatDistanceUnitEnum = "mi"
)

type GetDistanceBetweenPairsOutputFormatQueryParams struct {
	CorrectSide      *bool                                                `queryParam:"style=form,explode=true,name=correctSide"`
	Criteria         *GetDistanceBetweenPairsOutputFormatCriteriaEnum     `queryParam:"style=form,explode=true,name=criteria"`
	Departure        *time.Time                                           `queryParam:"style=form,explode=true,name=departure"`
	Disable          *string                                              `queryParam:"style=form,explode=true,name=disable"`
	DistanceUnit     *GetDistanceBetweenPairsOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
	FromPoints       string                                               `queryParam:"style=form,explode=true,name=fromPoints"`
	MaxPairs         *int64                                               `queryParam:"style=form,explode=true,name=maxPairs"`
	OutputSrs        *int64                                               `queryParam:"style=form,explode=true,name=outputSRS"`
	RouteDescription *string                                              `queryParam:"style=form,explode=true,name=routeDescription"`
	ToPoints         string                                               `queryParam:"style=form,explode=true,name=toPoints"`
}

type GetDistanceBetweenPairsOutputFormatRequest struct {
	PathParams  GetDistanceBetweenPairsOutputFormatPathParams
	QueryParams GetDistanceBetweenPairsOutputFormatQueryParams
}

type GetDistanceBetweenPairsOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
