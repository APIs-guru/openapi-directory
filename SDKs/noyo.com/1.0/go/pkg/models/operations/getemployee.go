package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmployeePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=employee_id"`
}

type GetEmployeeRequest struct {
	PathParams GetEmployeePathParams
}

type GetEmployeeResponse struct {
	ContentType    string
	EmployeeResult *shared.EmployeeResult
	StatusCode     int64
}
