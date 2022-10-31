package operations

type GetTaggedImageCountPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetTaggedImageCountQueryParams struct {
	IterationID *string  `queryParam:"style=form,explode=true,name=iterationId"`
	TagIds      []string `queryParam:"style=form,explode=false,name=tagIds"`
}

type GetTaggedImageCountHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type GetTaggedImageCountRequest struct {
	PathParams  GetTaggedImageCountPathParams
	QueryParams GetTaggedImageCountQueryParams
	Headers     GetTaggedImageCountHeaders
}

type GetTaggedImageCountResponse struct {
	Body                                              []byte
	ContentType                                       string
	GetTaggedImageCount200ApplicationJSONInt32Integer *int32
	GetTaggedImageCount200TextJSONInt32Integer        *int32
	StatusCode                                        int64
}
