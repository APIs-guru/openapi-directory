package operations

import (
	"openapi/pkg/models/shared"
)

type EditGroupApplicationPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
	Version       string `pathParam:"style=simple,explode=false,name=version"`
}

type EditGroupApplicationRequest struct {
	PathParams EditGroupApplicationPathParams
	Request    shared.ApplicationEditRequest `request:"mediaType=application/json"`
}

type EditGroupApplicationResponse struct {
	ContentType            string
	GroupApplicationResult *shared.GroupApplicationResult
	StatusCode             int64
}
