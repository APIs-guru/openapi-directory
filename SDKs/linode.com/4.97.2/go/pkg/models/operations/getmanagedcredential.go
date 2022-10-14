package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedCredentialPathParams struct {
	CredentialID int64 `pathParam:"style=simple,explode=false,name=credentialId"`
}

type GetManagedCredentialSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetManagedCredentialSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetManagedCredentialSecurity struct {
	Option1 *GetManagedCredentialSecurityOption1 `security:"option"`
	Option2 *GetManagedCredentialSecurityOption2 `security:"option"`
}

type GetManagedCredentialRequest struct {
	PathParams GetManagedCredentialPathParams
	Security   GetManagedCredentialSecurity
}

type GetManagedCredentialDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetManagedCredentialResponse struct {
	ContentType                                      string
	ManagedCredential                                *shared.ManagedCredential
	StatusCode                                       int64
	GetManagedCredentialDefaultApplicationJSONObject *GetManagedCredentialDefaultApplicationJSON
}
