package operations

import (
	"openapi/pkg/models/shared"
)

type GetContactListPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
}

type GetContactListQueryParams struct {
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetContactListRequest struct {
	PathParams  GetContactListPathParams
	QueryParams GetContactListQueryParams
}

type GetContactListResponse struct {
	ContentType            string
	PaginatedContactResult *shared.PaginatedContactResult
	StatusCode             int64
}
