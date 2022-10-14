package operations

import (
	"openapi/pkg/models/shared"
)

type GetNodeBalancerConfigPathParams struct {
	ConfigID       int64 `pathParam:"style=simple,explode=false,name=configId"`
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type GetNodeBalancerConfigSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetNodeBalancerConfigSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetNodeBalancerConfigSecurity struct {
	Option1 *GetNodeBalancerConfigSecurityOption1 `security:"option"`
	Option2 *GetNodeBalancerConfigSecurityOption2 `security:"option"`
}

type GetNodeBalancerConfigRequest struct {
	PathParams GetNodeBalancerConfigPathParams
	Security   GetNodeBalancerConfigSecurity
}

type GetNodeBalancerConfigDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetNodeBalancerConfigResponse struct {
	ContentType                                       string
	NodeBalancerConfig                                *shared.NodeBalancerConfig
	StatusCode                                        int64
	GetNodeBalancerConfigDefaultApplicationJSONObject *GetNodeBalancerConfigDefaultApplicationJSON
}
