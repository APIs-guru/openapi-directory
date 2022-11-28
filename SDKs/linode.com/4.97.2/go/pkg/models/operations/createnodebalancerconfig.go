package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNodeBalancerConfigPathParams struct {
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type CreateNodeBalancerConfigSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateNodeBalancerConfigDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateNodeBalancerConfigRequest struct {
	PathParams CreateNodeBalancerConfigPathParams
	Request    *shared.NodeBalancerConfigInput `request:"mediaType=application/json"`
	Security   CreateNodeBalancerConfigSecurity
}

type CreateNodeBalancerConfigResponse struct {
	ContentType                                          string
	NodeBalancerConfig                                   *shared.NodeBalancerConfig
	StatusCode                                           int64
	CreateNodeBalancerConfigDefaultApplicationJSONObject *CreateNodeBalancerConfigDefaultApplicationJSON
}
