package operations

import (
	"time"
)

type GetDistanceOutputFormatOutputFormatEnum string

const (
	GetDistanceOutputFormatOutputFormatEnumJSON GetDistanceOutputFormatOutputFormatEnum = "json"
	GetDistanceOutputFormatOutputFormatEnumKml  GetDistanceOutputFormatOutputFormatEnum = "kml"
	GetDistanceOutputFormatOutputFormatEnumHTML GetDistanceOutputFormatOutputFormatEnum = "html"
)

type GetDistanceOutputFormatPathParams struct {
	OutputFormat GetDistanceOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetDistanceOutputFormatCriteriaEnum string

const (
	GetDistanceOutputFormatCriteriaEnumShortest GetDistanceOutputFormatCriteriaEnum = "shortest"
	GetDistanceOutputFormatCriteriaEnumFastest  GetDistanceOutputFormatCriteriaEnum = "fastest"
)

type GetDistanceOutputFormatDistanceUnitEnum string

const (
	GetDistanceOutputFormatDistanceUnitEnumKm GetDistanceOutputFormatDistanceUnitEnum = "km"
	GetDistanceOutputFormatDistanceUnitEnumMi GetDistanceOutputFormatDistanceUnitEnum = "mi"
)

type GetDistanceOutputFormatQueryParams struct {
	CorrectSide      *bool                                    `queryParam:"style=form,explode=true,name=correctSide"`
	Criteria         *GetDistanceOutputFormatCriteriaEnum     `queryParam:"style=form,explode=true,name=criteria"`
	Departure        *time.Time                               `queryParam:"style=form,explode=true,name=departure"`
	Disable          *string                                  `queryParam:"style=form,explode=true,name=disable"`
	DistanceUnit     *GetDistanceOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
	OutputSrs        *int64                                   `queryParam:"style=form,explode=true,name=outputSRS"`
	Points           string                                   `queryParam:"style=form,explode=true,name=points"`
	RoundTrip        *bool                                    `queryParam:"style=form,explode=true,name=roundTrip"`
	RouteDescription *string                                  `queryParam:"style=form,explode=true,name=routeDescription"`
}

type GetDistanceOutputFormatRequest struct {
	PathParams  GetDistanceOutputFormatPathParams
	QueryParams GetDistanceOutputFormatQueryParams
}

type GetDistanceOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
