package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileLoginPathParams struct {
	LoginID int64 `pathParam:"style=simple,explode=false,name=loginId"`
}

type GetProfileLoginSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetProfileLoginSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetProfileLoginSecurity struct {
	Option1 *GetProfileLoginSecurityOption1 `security:"option"`
	Option2 *GetProfileLoginSecurityOption2 `security:"option"`
}

type GetProfileLoginRequest struct {
	PathParams GetProfileLoginPathParams
	Security   GetProfileLoginSecurity
}

type GetProfileLoginDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetProfileLoginResponse struct {
	ContentType                                 string
	Login                                       *shared.Login
	StatusCode                                  int64
	GetProfileLoginDefaultApplicationJSONObject *GetProfileLoginDefaultApplicationJSON
}
