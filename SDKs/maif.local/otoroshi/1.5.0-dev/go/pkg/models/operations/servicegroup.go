package operations

import (
	"openapi/pkg/models/shared"
)

type ServiceGroupPathParams struct {
	ServiceGroupID string `pathParam:"style=simple,explode=false,name=serviceGroupId"`
}

type ServiceGroupSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type ServiceGroupRequest struct {
	PathParams ServiceGroupPathParams
	Security   ServiceGroupSecurity
}

type ServiceGroupResponse struct {
	ContentType string
	Group       *shared.Group
	StatusCode  int64
}
