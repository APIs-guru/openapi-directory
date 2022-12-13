package operations

import (
	"openapi/pkg/models/shared"
)

type GetLocationListPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
}

type GetLocationListQueryParams struct {
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetLocationListRequest struct {
	PathParams  GetLocationListPathParams
	QueryParams GetLocationListQueryParams
}

type GetLocationListResponse struct {
	ContentType             string
	PaginatedLocationResult *shared.PaginatedLocationResult
	StatusCode              int64
}
