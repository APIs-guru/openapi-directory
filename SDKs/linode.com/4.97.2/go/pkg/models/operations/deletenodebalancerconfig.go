package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteNodeBalancerConfigPathParams struct {
	ConfigID       int64 `pathParam:"style=simple,explode=false,name=configId"`
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type DeleteNodeBalancerConfigSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteNodeBalancerConfigSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteNodeBalancerConfigSecurity struct {
	Option1 *DeleteNodeBalancerConfigSecurityOption1 `security:"option"`
	Option2 *DeleteNodeBalancerConfigSecurityOption2 `security:"option"`
}

type DeleteNodeBalancerConfigRequest struct {
	PathParams DeleteNodeBalancerConfigPathParams
	Security   DeleteNodeBalancerConfigSecurity
}

type DeleteNodeBalancerConfigDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteNodeBalancerConfigResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	DeleteNodeBalancerConfig200ApplicationJSONObject     map[string]interface{}
	DeleteNodeBalancerConfigDefaultApplicationJSONObject *DeleteNodeBalancerConfigDefaultApplicationJSON
}
