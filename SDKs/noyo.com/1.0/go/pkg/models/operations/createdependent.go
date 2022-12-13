package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDependentPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=employee_id"`
}

type CreateDependentRequest struct {
	PathParams CreateDependentPathParams
	Request    shared.DependentCreateRequest `request:"mediaType=application/json"`
}

type CreateDependentResponse struct {
	ContentType     string
	DependentResult *shared.DependentResult
	StatusCode      int64
}
