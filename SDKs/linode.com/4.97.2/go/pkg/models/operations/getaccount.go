package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetAccountDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetAccountRequest struct {
	Security GetAccountSecurity
}

type GetAccountResponse struct {
	Account                                *shared.Account
	ContentType                            string
	StatusCode                             int64
	GetAccountDefaultApplicationJSONObject *GetAccountDefaultApplicationJSON
}
