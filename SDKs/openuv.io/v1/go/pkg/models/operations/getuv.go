package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetUvQueryParams struct {
	Alt   *float64   `queryParam:"style=form,explode=true,name=alt"`
	Dt    *time.Time `queryParam:"style=form,explode=true,name=dt"`
	Lat   float64    `queryParam:"style=form,explode=true,name=lat"`
	Lng   float64    `queryParam:"style=form,explode=true,name=lng"`
	Ozone *float64   `queryParam:"style=form,explode=true,name=ozone"`
}

type GetUvHeaders struct {
	XAccessToken string `header:"style=simple,explode=false,name=x-access-token"`
}

type GetUvRequest struct {
	QueryParams GetUvQueryParams
	Headers     GetUvHeaders
}

type GetUvResponse struct {
	ContentType   string
	StatusCode    int64
	UvIndexResult *shared.UvIndexResult
}
