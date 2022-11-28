package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNodeBalancerPathParams struct {
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type UpdateNodeBalancerSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateNodeBalancerDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateNodeBalancerRequest struct {
	PathParams UpdateNodeBalancerPathParams
	Request    shared.NodeBalancerInput `request:"mediaType=application/json"`
	Security   UpdateNodeBalancerSecurity
}

type UpdateNodeBalancerResponse struct {
	ContentType                                    string
	NodeBalancer                                   *shared.NodeBalancer
	StatusCode                                     int64
	UpdateNodeBalancerDefaultApplicationJSONObject *UpdateNodeBalancerDefaultApplicationJSON
}
