package operations

import (
	"openapi/pkg/models/shared"
)

type SubmitGroupApplicationPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
	Version       string `pathParam:"style=simple,explode=false,name=version"`
}

type SubmitGroupApplicationRequest struct {
	PathParams SubmitGroupApplicationPathParams
}

type SubmitGroupApplicationResponse struct {
	ApplicationValidationResult *shared.ApplicationValidationResult
	ContentType                 string
	GroupApplicationResult      *shared.GroupApplicationResult
	StatusCode                  int64
}
