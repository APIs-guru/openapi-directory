package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteNodeBalancerPathParams struct {
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type DeleteNodeBalancerSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteNodeBalancerSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteNodeBalancerSecurity struct {
	Option1 *DeleteNodeBalancerSecurityOption1 `security:"option"`
	Option2 *DeleteNodeBalancerSecurityOption2 `security:"option"`
}

type DeleteNodeBalancerRequest struct {
	PathParams DeleteNodeBalancerPathParams
	Security   DeleteNodeBalancerSecurity
}

type DeleteNodeBalancerDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type DeleteNodeBalancerResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	DeleteNodeBalancer200ApplicationJSONObject     map[string]interface{}
	DeleteNodeBalancerDefaultApplicationJSONObject *DeleteNodeBalancerDefaultApplicationJSON
}
