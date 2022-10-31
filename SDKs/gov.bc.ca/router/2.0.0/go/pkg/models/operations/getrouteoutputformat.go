package operations

import (
	"time"
)

type GetRouteOutputFormatOutputFormatEnum string

const (
	GetRouteOutputFormatOutputFormatEnumJSON GetRouteOutputFormatOutputFormatEnum = "json"
	GetRouteOutputFormatOutputFormatEnumKml  GetRouteOutputFormatOutputFormatEnum = "kml"
	GetRouteOutputFormatOutputFormatEnumHTML GetRouteOutputFormatOutputFormatEnum = "html"
)

type GetRouteOutputFormatPathParams struct {
	OutputFormat GetRouteOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetRouteOutputFormatCriteriaEnum string

const (
	GetRouteOutputFormatCriteriaEnumShortest GetRouteOutputFormatCriteriaEnum = "shortest"
	GetRouteOutputFormatCriteriaEnumFastest  GetRouteOutputFormatCriteriaEnum = "fastest"
)

type GetRouteOutputFormatDistanceUnitEnum string

const (
	GetRouteOutputFormatDistanceUnitEnumKm GetRouteOutputFormatDistanceUnitEnum = "km"
	GetRouteOutputFormatDistanceUnitEnumMi GetRouteOutputFormatDistanceUnitEnum = "mi"
)

type GetRouteOutputFormatQueryParams struct {
	CorrectSide      *bool                                 `queryParam:"style=form,explode=true,name=correctSide"`
	Criteria         *GetRouteOutputFormatCriteriaEnum     `queryParam:"style=form,explode=true,name=criteria"`
	Departure        *time.Time                            `queryParam:"style=form,explode=true,name=departure"`
	Disable          *string                               `queryParam:"style=form,explode=true,name=disable"`
	DistanceUnit     *GetRouteOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
	OutputSrs        *int64                                `queryParam:"style=form,explode=true,name=outputSRS"`
	Points           string                                `queryParam:"style=form,explode=true,name=points"`
	RoundTrip        *bool                                 `queryParam:"style=form,explode=true,name=roundTrip"`
	RouteDescription *string                               `queryParam:"style=form,explode=true,name=routeDescription"`
}

type GetRouteOutputFormatRequest struct {
	PathParams  GetRouteOutputFormatPathParams
	QueryParams GetRouteOutputFormatQueryParams
}

type GetRouteOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
