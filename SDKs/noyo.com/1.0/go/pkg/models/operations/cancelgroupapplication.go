package operations

import (
	"openapi/pkg/models/shared"
)

type CancelGroupApplicationPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
	Version       string `pathParam:"style=simple,explode=false,name=version"`
}

type CancelGroupApplicationRequest struct {
	PathParams CancelGroupApplicationPathParams
}

type CancelGroupApplicationResponse struct {
	ContentType            string
	GroupApplicationResult *shared.GroupApplicationResult
	StatusCode             int64
}
