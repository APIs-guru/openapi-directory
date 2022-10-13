package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccountSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateAccountSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateAccountSecurity struct {
	Option1 *UpdateAccountSecurityOption1 `security:"option"`
	Option2 *UpdateAccountSecurityOption2 `security:"option"`
}

type UpdateAccountRequest struct {
	Request  shared.Account `request:"mediaType=application/json"`
	Security UpdateAccountSecurity
}

type UpdateAccountDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type UpdateAccountResponse struct {
	Account                                   *shared.Account
	ContentType                               string
	StatusCode                                int64
	UpdateAccountDefaultApplicationJSONObject *UpdateAccountDefaultApplicationJSON
}
