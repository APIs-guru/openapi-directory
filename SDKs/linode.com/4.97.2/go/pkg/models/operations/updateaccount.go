package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccountSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateAccountDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateAccountRequest struct {
	Request  shared.AccountInput `request:"mediaType=application/json"`
	Security UpdateAccountSecurity
}

type UpdateAccountResponse struct {
	Account                                   *shared.Account
	ContentType                               string
	StatusCode                                int64
	UpdateAccountDefaultApplicationJSONObject *UpdateAccountDefaultApplicationJSON
}
