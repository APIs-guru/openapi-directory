package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNodeBalancerConfigPathParams struct {
	ConfigID       int64 `pathParam:"style=simple,explode=false,name=configId"`
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type UpdateNodeBalancerConfigSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateNodeBalancerConfigDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateNodeBalancerConfigRequest struct {
	PathParams UpdateNodeBalancerConfigPathParams
	Request    shared.NodeBalancerConfigInput `request:"mediaType=application/json"`
	Security   UpdateNodeBalancerConfigSecurity
}

type UpdateNodeBalancerConfigResponse struct {
	ContentType                                          string
	NodeBalancerConfig                                   *shared.NodeBalancerConfig
	StatusCode                                           int64
	UpdateNodeBalancerConfigDefaultApplicationJSONObject *UpdateNodeBalancerConfigDefaultApplicationJSON
}
