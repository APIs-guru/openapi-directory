package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountLoginPathParams struct {
	LoginID int64 `pathParam:"style=simple,explode=false,name=loginId"`
}

type GetAccountLoginSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetAccountLoginDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetAccountLoginRequest struct {
	PathParams GetAccountLoginPathParams
	Security   GetAccountLoginSecurity
}

type GetAccountLoginResponse struct {
	ContentType                                 string
	Login                                       *shared.Login
	StatusCode                                  int64
	GetAccountLoginDefaultApplicationJSONObject *GetAccountLoginDefaultApplicationJSON
}
