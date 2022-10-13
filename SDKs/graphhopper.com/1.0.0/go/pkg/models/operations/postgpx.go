package operations

import (
	"openapi/pkg/models/shared"
)

type PostGpxQueryParams struct {
	GpsAccuracy *int64  `queryParam:"style=form,explode=true,name=gps_accuracy"`
	Vehicle     *string `queryParam:"style=form,explode=true,name=vehicle"`
}

type PostGpxRequest struct {
	QueryParams PostGpxQueryParams
}

type PostGpxResponse struct {
	ContentType   string
	GhError       *shared.GhError
	Headers       map[string][]string
	RouteResponse *shared.RouteResponse
	StatusCode    int64
}
