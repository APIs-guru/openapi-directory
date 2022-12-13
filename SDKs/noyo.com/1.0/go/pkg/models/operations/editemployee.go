package operations

import (
	"openapi/pkg/models/shared"
)

type EditEmployeePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=employee_id"`
	Version    string `pathParam:"style=simple,explode=false,name=version"`
}

type EditEmployeeRequest struct {
	PathParams EditEmployeePathParams
	Request    shared.EmployeeEditRequest `request:"mediaType=application/json"`
}

type EditEmployeeResponse struct {
	ContentType    string
	EmployeeResult *shared.EmployeeResult
	StatusCode     int64
}
