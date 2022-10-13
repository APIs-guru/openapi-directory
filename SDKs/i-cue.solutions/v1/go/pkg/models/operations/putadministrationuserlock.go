package operations

import (
	"openapi/pkg/models/shared"
)

type PutAdministrationUserLockHeaders struct {
	Token *string `header:"name=Token"`
}

type PutAdministrationUserLockRequests struct {
	ToggleUserRequest  *shared.ToggleUserRequest `request:"mediaType=application/*+json"`
	ToggleUserRequest1 *shared.ToggleUserRequest `request:"mediaType=application/json"`
	ToggleUserRequest2 *shared.ToggleUserRequest `request:"mediaType=text/json"`
}

type PutAdministrationUserLockRequest struct {
	Headers PutAdministrationUserLockHeaders
	Request *PutAdministrationUserLockRequests
}

type PutAdministrationUserLockResponse struct {
	ContentType string
	StatusCode  int64
}
