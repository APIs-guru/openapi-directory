package operations

import (
	"time"
)

type GetTruckDistanceOutputFormatOutputFormatEnum string

const (
	GetTruckDistanceOutputFormatOutputFormatEnumJSON GetTruckDistanceOutputFormatOutputFormatEnum = "json"
	GetTruckDistanceOutputFormatOutputFormatEnumKml  GetTruckDistanceOutputFormatOutputFormatEnum = "kml"
	GetTruckDistanceOutputFormatOutputFormatEnumHTML GetTruckDistanceOutputFormatOutputFormatEnum = "html"
)

type GetTruckDistanceOutputFormatPathParams struct {
	OutputFormat GetTruckDistanceOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetTruckDistanceOutputFormatCriteriaEnum string

const (
	GetTruckDistanceOutputFormatCriteriaEnumShortest GetTruckDistanceOutputFormatCriteriaEnum = "shortest"
	GetTruckDistanceOutputFormatCriteriaEnumFastest  GetTruckDistanceOutputFormatCriteriaEnum = "fastest"
)

type GetTruckDistanceOutputFormatDistanceUnitEnum string

const (
	GetTruckDistanceOutputFormatDistanceUnitEnumKm GetTruckDistanceOutputFormatDistanceUnitEnum = "km"
	GetTruckDistanceOutputFormatDistanceUnitEnumMi GetTruckDistanceOutputFormatDistanceUnitEnum = "mi"
)

type GetTruckDistanceOutputFormatQueryParams struct {
	CorrectSide      *bool                                         `queryParam:"style=form,explode=true,name=correctSide"`
	Criteria         *GetTruckDistanceOutputFormatCriteriaEnum     `queryParam:"style=form,explode=true,name=criteria"`
	Departure        *time.Time                                    `queryParam:"style=form,explode=true,name=departure"`
	Disable          *string                                       `queryParam:"style=form,explode=true,name=disable"`
	DistanceUnit     *GetTruckDistanceOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
	OutputSrs        *int64                                        `queryParam:"style=form,explode=true,name=outputSRS"`
	Points           string                                        `queryParam:"style=form,explode=true,name=points"`
	RoundTrip        *bool                                         `queryParam:"style=form,explode=true,name=roundTrip"`
	RouteDescription *string                                       `queryParam:"style=form,explode=true,name=routeDescription"`
}

type GetTruckDistanceOutputFormatRequest struct {
	PathParams  GetTruckDistanceOutputFormatPathParams
	QueryParams GetTruckDistanceOutputFormatQueryParams
}

type GetTruckDistanceOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
