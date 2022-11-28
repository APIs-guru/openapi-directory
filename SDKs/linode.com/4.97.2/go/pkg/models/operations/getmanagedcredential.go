package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedCredentialPathParams struct {
	CredentialID int64 `pathParam:"style=simple,explode=false,name=credentialId"`
}

type GetManagedCredentialSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetManagedCredentialDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetManagedCredentialRequest struct {
	PathParams GetManagedCredentialPathParams
	Security   GetManagedCredentialSecurity
}

type GetManagedCredentialResponse struct {
	ContentType                                      string
	ManagedCredential                                *shared.ManagedCredential
	StatusCode                                       int64
	GetManagedCredentialDefaultApplicationJSONObject *GetManagedCredentialDefaultApplicationJSON
}
