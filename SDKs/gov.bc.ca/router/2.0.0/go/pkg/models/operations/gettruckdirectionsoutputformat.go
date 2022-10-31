package operations

import (
	"time"
)

type GetTruckDirectionsOutputFormatOutputFormatEnum string

const (
	GetTruckDirectionsOutputFormatOutputFormatEnumJSON GetTruckDirectionsOutputFormatOutputFormatEnum = "json"
	GetTruckDirectionsOutputFormatOutputFormatEnumKml  GetTruckDirectionsOutputFormatOutputFormatEnum = "kml"
	GetTruckDirectionsOutputFormatOutputFormatEnumHTML GetTruckDirectionsOutputFormatOutputFormatEnum = "html"
)

type GetTruckDirectionsOutputFormatPathParams struct {
	OutputFormat GetTruckDirectionsOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetTruckDirectionsOutputFormatCriteriaEnum string

const (
	GetTruckDirectionsOutputFormatCriteriaEnumShortest GetTruckDirectionsOutputFormatCriteriaEnum = "shortest"
	GetTruckDirectionsOutputFormatCriteriaEnumFastest  GetTruckDirectionsOutputFormatCriteriaEnum = "fastest"
)

type GetTruckDirectionsOutputFormatDistanceUnitEnum string

const (
	GetTruckDirectionsOutputFormatDistanceUnitEnumKm GetTruckDirectionsOutputFormatDistanceUnitEnum = "km"
	GetTruckDirectionsOutputFormatDistanceUnitEnumMi GetTruckDirectionsOutputFormatDistanceUnitEnum = "mi"
)

type GetTruckDirectionsOutputFormatQueryParams struct {
	CorrectSide      *bool                                           `queryParam:"style=form,explode=true,name=correctSide"`
	Criteria         *GetTruckDirectionsOutputFormatCriteriaEnum     `queryParam:"style=form,explode=true,name=criteria"`
	Departure        *time.Time                                      `queryParam:"style=form,explode=true,name=departure"`
	Disable          *string                                         `queryParam:"style=form,explode=true,name=disable"`
	DistanceUnit     *GetTruckDirectionsOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
	OutputSrs        *int64                                          `queryParam:"style=form,explode=true,name=outputSRS"`
	Points           string                                          `queryParam:"style=form,explode=true,name=points"`
	RoundTrip        *bool                                           `queryParam:"style=form,explode=true,name=roundTrip"`
	RouteDescription *string                                         `queryParam:"style=form,explode=true,name=routeDescription"`
}

type GetTruckDirectionsOutputFormatRequest struct {
	PathParams  GetTruckDirectionsOutputFormatPathParams
	QueryParams GetTruckDirectionsOutputFormatQueryParams
}

type GetTruckDirectionsOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
