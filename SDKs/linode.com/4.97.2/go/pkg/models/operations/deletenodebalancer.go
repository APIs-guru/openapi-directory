package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteNodeBalancerPathParams struct {
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type DeleteNodeBalancerSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteNodeBalancerDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteNodeBalancerRequest struct {
	PathParams DeleteNodeBalancerPathParams
	Security   DeleteNodeBalancerSecurity
}

type DeleteNodeBalancerResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	DeleteNodeBalancer200ApplicationJSONObject     map[string]interface{}
	DeleteNodeBalancerDefaultApplicationJSONObject *DeleteNodeBalancerDefaultApplicationJSON
}
