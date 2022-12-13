package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupApplicationPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
}

type GetGroupApplicationRequest struct {
	PathParams GetGroupApplicationPathParams
}

type GetGroupApplicationResponse struct {
	ContentType            string
	GroupApplicationResult *shared.GroupApplicationResult
	StatusCode             int64
}
