package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetAccountSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetAccountSecurity struct {
	Option1 *GetAccountSecurityOption1 `security:"option"`
	Option2 *GetAccountSecurityOption2 `security:"option"`
}

type GetAccountRequest struct {
	Security GetAccountSecurity
}

type GetAccountDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetAccountResponse struct {
	Account                                *shared.Account
	ContentType                            string
	StatusCode                             int64
	GetAccountDefaultApplicationJSONObject *GetAccountDefaultApplicationJSON
}
