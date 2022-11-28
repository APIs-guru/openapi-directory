package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileLoginPathParams struct {
	LoginID int64 `pathParam:"style=simple,explode=false,name=loginId"`
}

type GetProfileLoginSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetProfileLoginDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetProfileLoginRequest struct {
	PathParams GetProfileLoginPathParams
	Security   GetProfileLoginSecurity
}

type GetProfileLoginResponse struct {
	ContentType                                 string
	Login                                       *shared.Login
	StatusCode                                  int64
	GetProfileLoginDefaultApplicationJSONObject *GetProfileLoginDefaultApplicationJSON
}
