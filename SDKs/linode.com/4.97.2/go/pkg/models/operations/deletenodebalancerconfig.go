package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteNodeBalancerConfigPathParams struct {
	ConfigID       int64 `pathParam:"style=simple,explode=false,name=configId"`
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type DeleteNodeBalancerConfigSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteNodeBalancerConfigDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteNodeBalancerConfigRequest struct {
	PathParams DeleteNodeBalancerConfigPathParams
	Security   DeleteNodeBalancerConfigSecurity
}

type DeleteNodeBalancerConfigResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	DeleteNodeBalancerConfig200ApplicationJSONObject     map[string]interface{}
	DeleteNodeBalancerConfigDefaultApplicationJSONObject *DeleteNodeBalancerConfigDefaultApplicationJSON
}
