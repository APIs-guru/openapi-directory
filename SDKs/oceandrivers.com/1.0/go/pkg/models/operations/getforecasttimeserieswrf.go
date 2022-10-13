package operations

type GetForecastTimeSeriesWrfPathParams struct {
	Latitude  float32 `pathParam:"style=simple,explode=false,name=latitude"`
	Longitude float32 `pathParam:"style=simple,explode=false,name=longitude"`
}

type GetForecastTimeSeriesWrfQueryParams struct {
	Days     *int32  `queryParam:"style=form,explode=true,name=days"`
	Endtime  *string `queryParam:"style=form,explode=true,name=endtime"`
	Entryid  *string `queryParam:"style=form,explode=true,name=entryid"`
	Hours    *int32  `queryParam:"style=form,explode=true,name=hours"`
	Inittime *string `queryParam:"style=form,explode=true,name=inittime"`
	Wave     *string `queryParam:"style=form,explode=true,name=wave"`
	Weather  string  `queryParam:"style=form,explode=true,name=weather"`
}

type GetForecastTimeSeriesWrfRequest struct {
	PathParams  GetForecastTimeSeriesWrfPathParams
	QueryParams GetForecastTimeSeriesWrfQueryParams
}

type GetForecastTimeSeriesWrfResponse struct {
	ContentType string
	StatusCode  int64
}
