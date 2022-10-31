package operations

import (
	"time"
)

type PostOptimalDirectionsOutputFormatOutputFormatEnum string

const (
	PostOptimalDirectionsOutputFormatOutputFormatEnumJSON PostOptimalDirectionsOutputFormatOutputFormatEnum = "json"
	PostOptimalDirectionsOutputFormatOutputFormatEnumKml  PostOptimalDirectionsOutputFormatOutputFormatEnum = "kml"
	PostOptimalDirectionsOutputFormatOutputFormatEnumHTML PostOptimalDirectionsOutputFormatOutputFormatEnum = "html"
)

type PostOptimalDirectionsOutputFormatPathParams struct {
	OutputFormat PostOptimalDirectionsOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type PostOptimalDirectionsOutputFormatCriteriaEnum string

const (
	PostOptimalDirectionsOutputFormatCriteriaEnumShortest PostOptimalDirectionsOutputFormatCriteriaEnum = "shortest"
	PostOptimalDirectionsOutputFormatCriteriaEnumFastest  PostOptimalDirectionsOutputFormatCriteriaEnum = "fastest"
)

type PostOptimalDirectionsOutputFormatDistanceUnitEnum string

const (
	PostOptimalDirectionsOutputFormatDistanceUnitEnumKm PostOptimalDirectionsOutputFormatDistanceUnitEnum = "km"
	PostOptimalDirectionsOutputFormatDistanceUnitEnumMi PostOptimalDirectionsOutputFormatDistanceUnitEnum = "mi"
)

type PostOptimalDirectionsOutputFormatQueryParams struct {
	CorrectSide      *bool                                              `queryParam:"style=form,explode=true,name=correctSide"`
	Criteria         *PostOptimalDirectionsOutputFormatCriteriaEnum     `queryParam:"style=form,explode=true,name=criteria"`
	Departure        *time.Time                                         `queryParam:"style=form,explode=true,name=departure"`
	Disable          *string                                            `queryParam:"style=form,explode=true,name=disable"`
	DistanceUnit     *PostOptimalDirectionsOutputFormatDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
	OutputSrs        *int64                                             `queryParam:"style=form,explode=true,name=outputSRS"`
	Points           string                                             `queryParam:"style=form,explode=true,name=points"`
	RoundTrip        *bool                                              `queryParam:"style=form,explode=true,name=roundTrip"`
	RouteDescription *string                                            `queryParam:"style=form,explode=true,name=routeDescription"`
}

type PostOptimalDirectionsOutputFormatRequest struct {
	PathParams  PostOptimalDirectionsOutputFormatPathParams
	QueryParams PostOptimalDirectionsOutputFormatQueryParams
}

type PostOptimalDirectionsOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
