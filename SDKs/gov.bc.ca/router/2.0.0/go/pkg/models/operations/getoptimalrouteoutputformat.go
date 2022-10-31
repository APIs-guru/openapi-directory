package operations

import (
	"time"
)

type GetOptimalRouteOutputFormatOutputFormatEnum string

const (
	GetOptimalRouteOutputFormatOutputFormatEnumJSON GetOptimalRouteOutputFormatOutputFormatEnum = "json"
	GetOptimalRouteOutputFormatOutputFormatEnumKml  GetOptimalRouteOutputFormatOutputFormatEnum = "kml"
	GetOptimalRouteOutputFormatOutputFormatEnumHTML GetOptimalRouteOutputFormatOutputFormatEnum = "html"
)

type GetOptimalRouteOutputFormatPathParams struct {
	OutputFormat GetOptimalRouteOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetOptimalRouteOutputFormatCriteriaEnum string

const (
	GetOptimalRouteOutputFormatCriteriaEnumShortest GetOptimalRouteOutputFormatCriteriaEnum = "shortest"
	GetOptimalRouteOutputFormatCriteriaEnumFastest  GetOptimalRouteOutputFormatCriteriaEnum = "fastest"
)

type GetOptimalRouteOutputFormatDistanceUnitEnum string

const (
	GetOptimalRouteOutputFormatDistanceUnitEnumKm GetOptimalRouteOutputFormatDistanceUnitEnum = "km"
	GetOptimalRouteOutputFormatDistanceUnitEnumMi GetOptimalRouteOutputFormatDistanceUnitEnum = "mi"
)

type GetOptimalRouteOutputFormatQueryParams struct {
	CorrectSide      *bool                                        `queryParam:"style=form,explode=true,name=correctSide"`
	Criteria         *GetOptimalRouteOutputFormatCriteriaEnum     `queryParam:"style=form,explode=true,name=criteria"`
	Departure        *time.Time                                   `queryParam:"style=form,explode=true,name=departure"`
	Disable          *string                                      `queryParam:"style=form,explode=true,name=disable"`
	DistanceUnit     *GetOptimalRouteOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
	OutputSrs        *int64                                       `queryParam:"style=form,explode=true,name=outputSRS"`
	Points           string                                       `queryParam:"style=form,explode=true,name=points"`
	RoundTrip        *bool                                        `queryParam:"style=form,explode=true,name=roundTrip"`
	RouteDescription *string                                      `queryParam:"style=form,explode=true,name=routeDescription"`
}

type GetOptimalRouteOutputFormatRequest struct {
	PathParams  GetOptimalRouteOutputFormatPathParams
	QueryParams GetOptimalRouteOutputFormatQueryParams
}

type GetOptimalRouteOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
