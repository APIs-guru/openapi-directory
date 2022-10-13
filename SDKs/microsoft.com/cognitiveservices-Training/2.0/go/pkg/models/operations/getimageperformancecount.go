package operations

type GetImagePerformanceCountPathParams struct {
	IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetImagePerformanceCountQueryParams struct {
	TagIds []string `queryParam:"style=form,explode=false,name=tagIds"`
}

type GetImagePerformanceCountHeaders struct {
	TrainingKey string `header:"name=Training-Key"`
}

type GetImagePerformanceCountRequest struct {
	PathParams  GetImagePerformanceCountPathParams
	QueryParams GetImagePerformanceCountQueryParams
	Headers     GetImagePerformanceCountHeaders
}

type GetImagePerformanceCountResponse struct {
	Body                                                   []byte
	ContentType                                            string
	GetImagePerformanceCount200ApplicationJSONInt32Integer *int32
	GetImagePerformanceCount200TextJSONInt32Integer        *int32
	StatusCode                                             int64
}
