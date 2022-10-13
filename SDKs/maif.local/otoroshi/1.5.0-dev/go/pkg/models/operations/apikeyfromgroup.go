package operations

import (
	"openapi/pkg/models/shared"
)

type APIKeyFromGroupPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
	GroupID  string `pathParam:"style=simple,explode=false,name=groupId"`
}

type APIKeyFromGroupSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type APIKeyFromGroupRequest struct {
	PathParams APIKeyFromGroupPathParams
	Security   APIKeyFromGroupSecurity
}

type APIKeyFromGroupResponse struct {
	APIKey      *shared.APIKey
	ContentType string
	StatusCode  int64
}
