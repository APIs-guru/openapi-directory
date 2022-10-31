package operations

type GetForecastResultJobIDPathParams struct {
	JobID int32 `pathParam:"style=simple,explode=false,name=jobId"`
}

type GetForecastResultJobIDHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type GetForecastResultJobIDRequest struct {
	PathParams GetForecastResultJobIDPathParams
	Headers    GetForecastResultJobIDHeaders
}

type GetForecastResultJobIDResponse struct {
	ContentType string
	StatusCode  int64
}
