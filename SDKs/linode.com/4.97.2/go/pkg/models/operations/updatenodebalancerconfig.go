package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNodeBalancerConfigPathParams struct {
	ConfigID       int64 `pathParam:"style=simple,explode=false,name=configId"`
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type UpdateNodeBalancerConfigSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateNodeBalancerConfigSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateNodeBalancerConfigSecurity struct {
	Option1 *UpdateNodeBalancerConfigSecurityOption1 `security:"option"`
	Option2 *UpdateNodeBalancerConfigSecurityOption2 `security:"option"`
}

type UpdateNodeBalancerConfigRequest struct {
	PathParams UpdateNodeBalancerConfigPathParams
	Request    shared.NodeBalancerConfig `request:"mediaType=application/json"`
	Security   UpdateNodeBalancerConfigSecurity
}

type UpdateNodeBalancerConfigDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type UpdateNodeBalancerConfigResponse struct {
	ContentType                                          string
	NodeBalancerConfig                                   *shared.NodeBalancerConfig
	StatusCode                                           int64
	UpdateNodeBalancerConfigDefaultApplicationJSONObject *UpdateNodeBalancerConfigDefaultApplicationJSON
}
