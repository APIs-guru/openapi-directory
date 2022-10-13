package operations

type GetForecastStatusJobIDPathParams struct {
	JobID int32 `pathParam:"style=simple,explode=false,name=jobId"`
}

type GetForecastStatusJobIDHeaders struct {
	Token *string `header:"name=Token"`
}

type GetForecastStatusJobIDRequest struct {
	PathParams GetForecastStatusJobIDPathParams
	Headers    GetForecastStatusJobIDHeaders
}

type GetForecastStatusJobIDResponse struct {
	ContentType string
	StatusCode  int64
}
