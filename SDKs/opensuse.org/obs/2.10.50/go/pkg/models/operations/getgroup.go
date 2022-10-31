package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetGroupRequest struct {
	Security GetGroupSecurity
}

type GetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
