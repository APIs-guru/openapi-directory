package operations

import (
	"openapi/pkg/models/shared"
)

type GetNodeBalancerConfigPathParams struct {
	ConfigID       int64 `pathParam:"style=simple,explode=false,name=configId"`
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type GetNodeBalancerConfigSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetNodeBalancerConfigDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetNodeBalancerConfigRequest struct {
	PathParams GetNodeBalancerConfigPathParams
	Security   GetNodeBalancerConfigSecurity
}

type GetNodeBalancerConfigResponse struct {
	ContentType                                       string
	NodeBalancerConfig                                *shared.NodeBalancerConfig
	StatusCode                                        int64
	GetNodeBalancerConfigDefaultApplicationJSONObject *GetNodeBalancerConfigDefaultApplicationJSON
}
