package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateManagedCredentialPathParams struct {
	CredentialID int64 `pathParam:"style=simple,explode=false,name=credentialId"`
}

type UpdateManagedCredentialSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateManagedCredentialDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateManagedCredentialRequest struct {
	PathParams UpdateManagedCredentialPathParams
	Request    shared.ManagedCredentialInput `request:"mediaType=application/json"`
	Security   UpdateManagedCredentialSecurity
}

type UpdateManagedCredentialResponse struct {
	ContentType                                         string
	ManagedCredential                                   *shared.ManagedCredential
	StatusCode                                          int64
	UpdateManagedCredentialDefaultApplicationJSONObject *UpdateManagedCredentialDefaultApplicationJSON
}
