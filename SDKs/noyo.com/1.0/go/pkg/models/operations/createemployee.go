package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEmployeePathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
}

type CreateEmployeeRequest struct {
	PathParams CreateEmployeePathParams
	Request    shared.EmployeeCreateRequest `request:"mediaType=application/json"`
}

type CreateEmployeeResponse struct {
	ContentType    string
	EmployeeResult *shared.EmployeeResult
	StatusCode     int64
}
