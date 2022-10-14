package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountLoginPathParams struct {
	LoginID int64 `pathParam:"style=simple,explode=false,name=loginId"`
}

type GetAccountLoginSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetAccountLoginSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetAccountLoginSecurity struct {
	Option1 *GetAccountLoginSecurityOption1 `security:"option"`
	Option2 *GetAccountLoginSecurityOption2 `security:"option"`
}

type GetAccountLoginRequest struct {
	PathParams GetAccountLoginPathParams
	Security   GetAccountLoginSecurity
}

type GetAccountLoginDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetAccountLoginResponse struct {
	ContentType                                 string
	Login                                       *shared.Login
	StatusCode                                  int64
	GetAccountLoginDefaultApplicationJSONObject *GetAccountLoginDefaultApplicationJSON
}
