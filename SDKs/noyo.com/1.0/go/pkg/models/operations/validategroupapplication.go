package operations

import (
	"openapi/pkg/models/shared"
)

type ValidateGroupApplicationPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
}

type ValidateGroupApplicationRequest struct {
	PathParams ValidateGroupApplicationPathParams
}

type ValidateGroupApplicationResponse struct {
	ApplicationValidationResult *shared.ApplicationValidationResult
	ContentType                 string
	StatusCode                  int64
}
