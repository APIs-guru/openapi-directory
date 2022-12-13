package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGroupRequest struct {
	Request shared.GroupCreateRequest `request:"mediaType=application/json"`
}

type CreateGroupResponse struct {
	ContentType string
	GroupResult *shared.GroupResult
	StatusCode  int64
}
