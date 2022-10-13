package operations

import (
	"openapi/pkg/models/shared"
)

type GetPublicUsersResponse struct {
	ContentType string
	StatusCode  int64
	UserDtos    []shared.UserDto
}
