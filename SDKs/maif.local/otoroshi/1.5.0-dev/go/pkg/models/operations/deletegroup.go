package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteGroupPathParams struct {
	ServiceGroupID string `pathParam:"style=simple,explode=false,name=serviceGroupId"`
}

type DeleteGroupSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type DeleteGroupRequest struct {
	PathParams DeleteGroupPathParams
	Security   DeleteGroupSecurity
}

type DeleteGroupResponse struct {
	ContentType string
	Deleted     *shared.Deleted
	StatusCode  int64
}
