package operations

import (
	"openapi/pkg/models/shared"
)

type SourcesV1GetV1SourcesGetQueryParams struct {
	Limit   *int64                     `queryParam:"style=form,explode=true,name=limit"`
	Name    *string                    `queryParam:"style=form,explode=true,name=name"`
	Offset  *int64                     `queryParam:"style=form,explode=true,name=offset"`
	OrderBy *shared.SourcesV1OrderEnum `queryParam:"style=form,explode=true,name=order_by"`
	Page    *int64                     `queryParam:"style=form,explode=true,name=page"`
	Sort    *shared.SortEnum           `queryParam:"style=form,explode=true,name=sort"`
}

type SourcesV1GetV1SourcesGetRequest struct {
	QueryParams SourcesV1GetV1SourcesGetQueryParams
}

type SourcesV1GetV1SourcesGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	OpenAqResult        *shared.OpenAqResult
	StatusCode          int64
}
