package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetTagsQueryParams struct {
	IterationID *string `queryParam:"style=form,explode=true,name=iterationId"`
}

type GetTagsHeaders struct {
	TrainingKey string `header:"name=Training-Key"`
}

type GetTagsRequest struct {
	PathParams  GetTagsPathParams
	QueryParams GetTagsQueryParams
	Headers     GetTagsHeaders
}

type GetTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	TagList     *shared.TagList
}
