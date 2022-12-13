package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupEmployeesListPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
}

type GetGroupEmployeesListQueryParams struct {
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetGroupEmployeesListRequest struct {
	PathParams  GetGroupEmployeesListPathParams
	QueryParams GetGroupEmployeesListQueryParams
}

type GetGroupEmployeesListResponse struct {
	ContentType             string
	PaginatedEmployeeResult *shared.PaginatedEmployeeResult
	StatusCode              int64
}
