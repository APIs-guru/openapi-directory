package operations

import (
	"time"
)

type PostTruckDirectionsOutputFormatOutputFormatEnum string

const (
	PostTruckDirectionsOutputFormatOutputFormatEnumJSON PostTruckDirectionsOutputFormatOutputFormatEnum = "json"
	PostTruckDirectionsOutputFormatOutputFormatEnumKml  PostTruckDirectionsOutputFormatOutputFormatEnum = "kml"
	PostTruckDirectionsOutputFormatOutputFormatEnumHTML PostTruckDirectionsOutputFormatOutputFormatEnum = "html"
)

type PostTruckDirectionsOutputFormatPathParams struct {
	OutputFormat PostTruckDirectionsOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type PostTruckDirectionsOutputFormatCriteriaEnum string

const (
	PostTruckDirectionsOutputFormatCriteriaEnumShortest PostTruckDirectionsOutputFormatCriteriaEnum = "shortest"
	PostTruckDirectionsOutputFormatCriteriaEnumFastest  PostTruckDirectionsOutputFormatCriteriaEnum = "fastest"
)

type PostTruckDirectionsOutputFormatDistanceUnitEnum string

const (
	PostTruckDirectionsOutputFormatDistanceUnitEnumKm PostTruckDirectionsOutputFormatDistanceUnitEnum = "km"
	PostTruckDirectionsOutputFormatDistanceUnitEnumMi PostTruckDirectionsOutputFormatDistanceUnitEnum = "mi"
)

type PostTruckDirectionsOutputFormatQueryParams struct {
	CorrectSide      *bool                                            `queryParam:"style=form,explode=true,name=correctSide"`
	Criteria         *PostTruckDirectionsOutputFormatCriteriaEnum     `queryParam:"style=form,explode=true,name=criteria"`
	Departure        *time.Time                                       `queryParam:"style=form,explode=true,name=departure"`
	Disable          *string                                          `queryParam:"style=form,explode=true,name=disable"`
	DistanceUnit     *PostTruckDirectionsOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
	OutputSrs        *int64                                           `queryParam:"style=form,explode=true,name=outputSRS"`
	Points           string                                           `queryParam:"style=form,explode=true,name=points"`
	RoundTrip        *bool                                            `queryParam:"style=form,explode=true,name=roundTrip"`
	RouteDescription *string                                          `queryParam:"style=form,explode=true,name=routeDescription"`
}

type PostTruckDirectionsOutputFormatRequest struct {
	PathParams  PostTruckDirectionsOutputFormatPathParams
	QueryParams PostTruckDirectionsOutputFormatQueryParams
}

type PostTruckDirectionsOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
