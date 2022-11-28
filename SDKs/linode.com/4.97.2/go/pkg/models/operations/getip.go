package operations

import (
	"openapi/pkg/models/shared"
)

type GetIPPathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type GetIPSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetIPDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetIPRequest struct {
	PathParams GetIPPathParams
	Security   GetIPSecurity
}

type GetIPResponse struct {
	ContentType                       string
	IPAddress                         *shared.IPAddress
	StatusCode                        int64
	GetIPDefaultApplicationJSONObject *GetIPDefaultApplicationJSON
}
