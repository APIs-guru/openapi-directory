package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmployeeDependentsListPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=employee_id"`
}

type GetEmployeeDependentsListQueryParams struct {
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetEmployeeDependentsListRequest struct {
	PathParams  GetEmployeeDependentsListPathParams
	QueryParams GetEmployeeDependentsListQueryParams
}

type GetEmployeeDependentsListResponse struct {
	ContentType              string
	PaginatedDependentResult *shared.PaginatedDependentResult
	StatusCode               int64
}
