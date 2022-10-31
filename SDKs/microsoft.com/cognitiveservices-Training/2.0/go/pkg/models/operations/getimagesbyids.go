package operations

import (
	"openapi/pkg/models/shared"
)

type GetImagesByIdsPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetImagesByIdsQueryParams struct {
	ImageIds    []string `queryParam:"style=form,explode=false,name=imageIds"`
	IterationID *string  `queryParam:"style=form,explode=true,name=iterationId"`
}

type GetImagesByIdsHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type GetImagesByIdsRequest struct {
	PathParams  GetImagesByIdsPathParams
	QueryParams GetImagesByIdsQueryParams
	Headers     GetImagesByIdsHeaders
}

type GetImagesByIdsResponse struct {
	Body        []byte
	ContentType string
	Images      []shared.Image
	StatusCode  int64
}
