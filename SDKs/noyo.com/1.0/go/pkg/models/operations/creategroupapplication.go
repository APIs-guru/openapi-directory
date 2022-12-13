package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGroupApplicationPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
}

type CreateGroupApplicationRequest struct {
	PathParams CreateGroupApplicationPathParams
	Request    shared.ApplicationCreateRequest `request:"mediaType=application/json"`
}

type CreateGroupApplicationResponse struct {
	ContentType            string
	GroupApplicationResult *shared.GroupApplicationResult
	StatusCode             int64
}
