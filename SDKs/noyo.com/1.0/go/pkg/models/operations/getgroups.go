package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupsQueryParams struct {
	GroupIds *string `queryParam:"style=form,explode=true,name=group_ids"`
	Offset   *int64  `queryParam:"style=form,explode=true,name=offset"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type GetGroupsRequest struct {
	QueryParams GetGroupsQueryParams
}

type GetGroupsResponse struct {
	ContentType          string
	PaginatedGroupResult *shared.PaginatedGroupResult
	StatusCode           int64
}
