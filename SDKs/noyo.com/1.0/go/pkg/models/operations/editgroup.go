package operations

import (
	"openapi/pkg/models/shared"
)

type EditGroupPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type EditGroupRequest struct {
	PathParams EditGroupPathParams
	Request    shared.GroupEditRequest `request:"mediaType=application/json"`
}

type EditGroupResponse struct {
	ContentType string
	GroupResult *shared.GroupResult
	StatusCode  int64
}
