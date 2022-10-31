package operations

import (
	"time"
)

type GetTruckRouteOutputFormatOutputFormatEnum string

const (
	GetTruckRouteOutputFormatOutputFormatEnumJSON GetTruckRouteOutputFormatOutputFormatEnum = "json"
	GetTruckRouteOutputFormatOutputFormatEnumKml  GetTruckRouteOutputFormatOutputFormatEnum = "kml"
	GetTruckRouteOutputFormatOutputFormatEnumHTML GetTruckRouteOutputFormatOutputFormatEnum = "html"
)

type GetTruckRouteOutputFormatPathParams struct {
	OutputFormat GetTruckRouteOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetTruckRouteOutputFormatCriteriaEnum string

const (
	GetTruckRouteOutputFormatCriteriaEnumShortest GetTruckRouteOutputFormatCriteriaEnum = "shortest"
	GetTruckRouteOutputFormatCriteriaEnumFastest  GetTruckRouteOutputFormatCriteriaEnum = "fastest"
)

type GetTruckRouteOutputFormatDistanceUnitEnum string

const (
	GetTruckRouteOutputFormatDistanceUnitEnumKm GetTruckRouteOutputFormatDistanceUnitEnum = "km"
	GetTruckRouteOutputFormatDistanceUnitEnumMi GetTruckRouteOutputFormatDistanceUnitEnum = "mi"
)

type GetTruckRouteOutputFormatQueryParams struct {
	CorrectSide      *bool                                      `queryParam:"style=form,explode=true,name=correctSide"`
	Criteria         *GetTruckRouteOutputFormatCriteriaEnum     `queryParam:"style=form,explode=true,name=criteria"`
	Departure        *time.Time                                 `queryParam:"style=form,explode=true,name=departure"`
	Disable          *string                                    `queryParam:"style=form,explode=true,name=disable"`
	DistanceUnit     *GetTruckRouteOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
	OutputSrs        *int64                                     `queryParam:"style=form,explode=true,name=outputSRS"`
	Points           string                                     `queryParam:"style=form,explode=true,name=points"`
	RoundTrip        *bool                                      `queryParam:"style=form,explode=true,name=roundTrip"`
	RouteDescription *string                                    `queryParam:"style=form,explode=true,name=routeDescription"`
}

type GetTruckRouteOutputFormatRequest struct {
	PathParams  GetTruckRouteOutputFormatPathParams
	QueryParams GetTruckRouteOutputFormatQueryParams
}

type GetTruckRouteOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
