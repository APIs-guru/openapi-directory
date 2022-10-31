package operations

import (
	"time"
)

type PostDistanceOutputFormatOutputFormatEnum string

const (
	PostDistanceOutputFormatOutputFormatEnumJSON PostDistanceOutputFormatOutputFormatEnum = "json"
	PostDistanceOutputFormatOutputFormatEnumKml  PostDistanceOutputFormatOutputFormatEnum = "kml"
	PostDistanceOutputFormatOutputFormatEnumHTML PostDistanceOutputFormatOutputFormatEnum = "html"
)

type PostDistanceOutputFormatPathParams struct {
	OutputFormat PostDistanceOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type PostDistanceOutputFormatCriteriaEnum string

const (
	PostDistanceOutputFormatCriteriaEnumShortest PostDistanceOutputFormatCriteriaEnum = "shortest"
	PostDistanceOutputFormatCriteriaEnumFastest  PostDistanceOutputFormatCriteriaEnum = "fastest"
)

type PostDistanceOutputFormatDistanceUnitEnum string

const (
	PostDistanceOutputFormatDistanceUnitEnumKm PostDistanceOutputFormatDistanceUnitEnum = "km"
	PostDistanceOutputFormatDistanceUnitEnumMi PostDistanceOutputFormatDistanceUnitEnum = "mi"
)

type PostDistanceOutputFormatQueryParams struct {
	CorrectSide      *bool                                     `queryParam:"style=form,explode=true,name=correctSide"`
	Criteria         *PostDistanceOutputFormatCriteriaEnum     `queryParam:"style=form,explode=true,name=criteria"`
	Departure        *time.Time                                `queryParam:"style=form,explode=true,name=departure"`
	Disable          *string                                   `queryParam:"style=form,explode=true,name=disable"`
	DistanceUnit     *PostDistanceOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
	OutputSrs        *int64                                    `queryParam:"style=form,explode=true,name=outputSRS"`
	Points           string                                    `queryParam:"style=form,explode=true,name=points"`
	RoundTrip        *bool                                     `queryParam:"style=form,explode=true,name=roundTrip"`
	RouteDescription *string                                   `queryParam:"style=form,explode=true,name=routeDescription"`
}

type PostDistanceOutputFormatRequest struct {
	PathParams  PostDistanceOutputFormatPathParams
	QueryParams PostDistanceOutputFormatQueryParams
}

type PostDistanceOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
