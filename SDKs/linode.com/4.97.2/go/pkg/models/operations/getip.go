package operations

import (
	"openapi/pkg/models/shared"
)

type GetIPPathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type GetIPSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetIPSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetIPSecurity struct {
	Option1 *GetIPSecurityOption1 `security:"option"`
	Option2 *GetIPSecurityOption2 `security:"option"`
}

type GetIPRequest struct {
	PathParams GetIPPathParams
	Security   GetIPSecurity
}

type GetIPDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetIPResponse struct {
	ContentType                       string
	IPAddress                         *shared.IPAddress
	StatusCode                        int64
	GetIPDefaultApplicationJSONObject *GetIPDefaultApplicationJSON
}
