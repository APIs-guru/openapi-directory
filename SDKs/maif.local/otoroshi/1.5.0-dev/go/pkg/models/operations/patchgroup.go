package operations

import (
	"openapi/pkg/models/shared"
)

type PatchGroupPathParams struct {
	ServiceGroupID string `pathParam:"style=simple,explode=false,name=serviceGroupId"`
}

type PatchGroupSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type PatchGroupRequest struct {
	PathParams PatchGroupPathParams
	Request    []shared.Patch `request:"mediaType=application/json"`
	Security   PatchGroupSecurity
}

type PatchGroupResponse struct {
	ContentType string
	Group       *shared.Group
	StatusCode  int64
}
