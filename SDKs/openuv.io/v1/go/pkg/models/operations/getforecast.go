package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetForecastQueryParams struct {
	Alt   *float64   `queryParam:"style=form,explode=true,name=alt"`
	Dt    *time.Time `queryParam:"style=form,explode=true,name=dt"`
	Lat   float64    `queryParam:"style=form,explode=true,name=lat"`
	Lng   float64    `queryParam:"style=form,explode=true,name=lng"`
	Ozone *float64   `queryParam:"style=form,explode=true,name=ozone"`
}

type GetForecastHeaders struct {
	XAccessToken string `header:"style=simple,explode=false,name=x-access-token"`
}

type GetForecastRequest struct {
	QueryParams GetForecastQueryParams
	Headers     GetForecastHeaders
}

type GetForecastResponse struct {
	ContentType     string
	StatusCode      int64
	ForecastResults [][]shared.Forecast
}
