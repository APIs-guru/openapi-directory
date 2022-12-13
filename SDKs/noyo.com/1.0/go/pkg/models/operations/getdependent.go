package operations

import (
	"openapi/pkg/models/shared"
)

type GetDependentPathParams struct {
	DependentID string `pathParam:"style=simple,explode=false,name=dependent_id"`
}

type GetDependentRequest struct {
	PathParams GetDependentPathParams
}

type GetDependentResponse struct {
	ContentType     string
	DependentResult *shared.DependentResult
	StatusCode      int64
}
