package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateIPPathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type UpdateIPSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateIPSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateIPSecurity struct {
	Option1 *UpdateIPSecurityOption1 `security:"option"`
	Option2 *UpdateIPSecurityOption2 `security:"option"`
}

type UpdateIPRequest struct {
	PathParams UpdateIPPathParams
	Request    shared.IPAddress `request:"mediaType=application/json"`
	Security   UpdateIPSecurity
}

type UpdateIPDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateIPResponse struct {
	ContentType                          string
	IPAddress                            *shared.IPAddress
	StatusCode                           int64
	UpdateIPDefaultApplicationJSONObject *UpdateIPDefaultApplicationJSON
}
