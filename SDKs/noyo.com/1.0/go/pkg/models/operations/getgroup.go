package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
}

type GetGroupRequest struct {
	PathParams GetGroupPathParams
}

type GetGroupResponse struct {
	ContentType string
	GroupResult *shared.GroupResult
	StatusCode  int64
}
