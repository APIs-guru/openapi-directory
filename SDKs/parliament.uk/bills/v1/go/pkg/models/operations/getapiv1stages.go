package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1StagesQueryParams struct {
	Skip *int32 `queryParam:"style=form,explode=true,name=Skip"`
	Take *int32 `queryParam:"style=form,explode=true,name=Take"`
}

type GetAPIV1StagesRequest struct {
	QueryParams GetAPIV1StagesQueryParams
}

type GetAPIV1StagesResponse struct {
	Body                       []byte
	ContentType                string
	ProblemDetails             map[string]interface{}
	StageReferenceSearchResult *shared.StageReferenceSearchResult
	StatusCode                 int64
}
