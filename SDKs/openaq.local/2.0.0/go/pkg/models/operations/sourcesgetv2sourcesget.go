package operations

import (
	"openapi/pkg/models/shared"
)

type SourcesGetV2SourcesGetQueryParams struct {
	Limit      *int64                   `queryParam:"style=form,explode=true,name=limit"`
	Offset     *int64                   `queryParam:"style=form,explode=true,name=offset"`
	OrderBy    *shared.SourcesOrderEnum `queryParam:"style=form,explode=true,name=order_by"`
	Page       *int64                   `queryParam:"style=form,explode=true,name=page"`
	Sort       *shared.SortEnum         `queryParam:"style=form,explode=true,name=sort"`
	SourceID   []int64                  `queryParam:"style=form,explode=true,name=sourceId"`
	SourceName []string                 `queryParam:"style=form,explode=true,name=sourceName"`
	SourceSlug []string                 `queryParam:"style=form,explode=true,name=sourceSlug"`
}

type SourcesGetV2SourcesGetRequest struct {
	QueryParams SourcesGetV2SourcesGetQueryParams
}

type SourcesGetV2SourcesGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	OpenAqResult        *shared.OpenAqResult
	StatusCode          int64
}
