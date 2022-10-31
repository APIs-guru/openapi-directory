package operations

type GetUntaggedImageCountPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetUntaggedImageCountQueryParams struct {
	IterationID *string `queryParam:"style=form,explode=true,name=iterationId"`
}

type GetUntaggedImageCountHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type GetUntaggedImageCountRequest struct {
	PathParams  GetUntaggedImageCountPathParams
	QueryParams GetUntaggedImageCountQueryParams
	Headers     GetUntaggedImageCountHeaders
}

type GetUntaggedImageCountResponse struct {
	Body                                                []byte
	ContentType                                         string
	GetUntaggedImageCount200ApplicationJSONInt32Integer *int32
	GetUntaggedImageCount200TextJSONInt32Integer        *int32
	StatusCode                                          int64
}
