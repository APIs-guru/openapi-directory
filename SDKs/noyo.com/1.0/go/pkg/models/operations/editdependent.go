package operations

import (
	"openapi/pkg/models/shared"
)

type EditDependentPathParams struct {
	DependentID string `pathParam:"style=simple,explode=false,name=dependent_id"`
	Version     string `pathParam:"style=simple,explode=false,name=version"`
}

type EditDependentRequest struct {
	PathParams EditDependentPathParams
	Request    shared.DependentEditRequest `request:"mediaType=application/json"`
}

type EditDependentResponse struct {
	ContentType     string
	DependentResult *shared.DependentResult
	StatusCode      int64
}
