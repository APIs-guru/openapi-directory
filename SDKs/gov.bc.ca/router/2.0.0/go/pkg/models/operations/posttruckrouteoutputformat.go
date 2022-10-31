package operations

import (
	"time"
)

type PostTruckRouteOutputFormatOutputFormatEnum string

const (
	PostTruckRouteOutputFormatOutputFormatEnumJSON PostTruckRouteOutputFormatOutputFormatEnum = "json"
	PostTruckRouteOutputFormatOutputFormatEnumKml  PostTruckRouteOutputFormatOutputFormatEnum = "kml"
	PostTruckRouteOutputFormatOutputFormatEnumHTML PostTruckRouteOutputFormatOutputFormatEnum = "html"
)

type PostTruckRouteOutputFormatPathParams struct {
	OutputFormat PostTruckRouteOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type PostTruckRouteOutputFormatCriteriaEnum string

const (
	PostTruckRouteOutputFormatCriteriaEnumShortest PostTruckRouteOutputFormatCriteriaEnum = "shortest"
	PostTruckRouteOutputFormatCriteriaEnumFastest  PostTruckRouteOutputFormatCriteriaEnum = "fastest"
)

type PostTruckRouteOutputFormatDistanceUnitEnum string

const (
	PostTruckRouteOutputFormatDistanceUnitEnumKm PostTruckRouteOutputFormatDistanceUnitEnum = "km"
	PostTruckRouteOutputFormatDistanceUnitEnumMi PostTruckRouteOutputFormatDistanceUnitEnum = "mi"
)

type PostTruckRouteOutputFormatQueryParams struct {
	CorrectSide      *bool                                       `queryParam:"style=form,explode=true,name=correctSide"`
	Criteria         *PostTruckRouteOutputFormatCriteriaEnum     `queryParam:"style=form,explode=true,name=criteria"`
	Departure        *time.Time                                  `queryParam:"style=form,explode=true,name=departure"`
	Disable          *string                                     `queryParam:"style=form,explode=true,name=disable"`
	DistanceUnit     *PostTruckRouteOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
	OutputSrs        *int64                                      `queryParam:"style=form,explode=true,name=outputSRS"`
	Points           string                                      `queryParam:"style=form,explode=true,name=points"`
	RoundTrip        *bool                                       `queryParam:"style=form,explode=true,name=roundTrip"`
	RouteDescription *string                                     `queryParam:"style=form,explode=true,name=routeDescription"`
}

type PostTruckRouteOutputFormatRequest struct {
	PathParams  PostTruckRouteOutputFormatPathParams
	QueryParams PostTruckRouteOutputFormatQueryParams
}

type PostTruckRouteOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
