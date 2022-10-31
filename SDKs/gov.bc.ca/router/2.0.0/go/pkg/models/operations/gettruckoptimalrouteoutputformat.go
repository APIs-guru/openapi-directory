package operations

import (
	"time"
)

type GetTruckOptimalRouteOutputFormatOutputFormatEnum string

const (
	GetTruckOptimalRouteOutputFormatOutputFormatEnumJSON GetTruckOptimalRouteOutputFormatOutputFormatEnum = "json"
	GetTruckOptimalRouteOutputFormatOutputFormatEnumKml  GetTruckOptimalRouteOutputFormatOutputFormatEnum = "kml"
	GetTruckOptimalRouteOutputFormatOutputFormatEnumHTML GetTruckOptimalRouteOutputFormatOutputFormatEnum = "html"
)

type GetTruckOptimalRouteOutputFormatPathParams struct {
	OutputFormat GetTruckOptimalRouteOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetTruckOptimalRouteOutputFormatCriteriaEnum string

const (
	GetTruckOptimalRouteOutputFormatCriteriaEnumShortest GetTruckOptimalRouteOutputFormatCriteriaEnum = "shortest"
	GetTruckOptimalRouteOutputFormatCriteriaEnumFastest  GetTruckOptimalRouteOutputFormatCriteriaEnum = "fastest"
)

type GetTruckOptimalRouteOutputFormatDistanceUnitEnum string

const (
	GetTruckOptimalRouteOutputFormatDistanceUnitEnumKm GetTruckOptimalRouteOutputFormatDistanceUnitEnum = "km"
	GetTruckOptimalRouteOutputFormatDistanceUnitEnumMi GetTruckOptimalRouteOutputFormatDistanceUnitEnum = "mi"
)

type GetTruckOptimalRouteOutputFormatQueryParams struct {
	CorrectSide      *bool                                             `queryParam:"style=form,explode=true,name=correctSide"`
	Criteria         *GetTruckOptimalRouteOutputFormatCriteriaEnum     `queryParam:"style=form,explode=true,name=criteria"`
	Departure        *time.Time                                        `queryParam:"style=form,explode=true,name=departure"`
	Disable          *string                                           `queryParam:"style=form,explode=true,name=disable"`
	DistanceUnit     *GetTruckOptimalRouteOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
	OutputSrs        *int64                                            `queryParam:"style=form,explode=true,name=outputSRS"`
	Points           string                                            `queryParam:"style=form,explode=true,name=points"`
	RoundTrip        *bool                                             `queryParam:"style=form,explode=true,name=roundTrip"`
	RouteDescription *string                                           `queryParam:"style=form,explode=true,name=routeDescription"`
}

type GetTruckOptimalRouteOutputFormatRequest struct {
	PathParams  GetTruckOptimalRouteOutputFormatPathParams
	QueryParams GetTruckOptimalRouteOutputFormatQueryParams
}

type GetTruckOptimalRouteOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
