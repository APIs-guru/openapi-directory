package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateManagedCredentialPathParams struct {
	CredentialID int64 `pathParam:"style=simple,explode=false,name=credentialId"`
}

type UpdateManagedCredentialSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateManagedCredentialSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateManagedCredentialSecurity struct {
	Option1 *UpdateManagedCredentialSecurityOption1 `security:"option"`
	Option2 *UpdateManagedCredentialSecurityOption2 `security:"option"`
}

type UpdateManagedCredentialRequest struct {
	PathParams UpdateManagedCredentialPathParams
	Request    shared.ManagedCredential `request:"mediaType=application/json"`
	Security   UpdateManagedCredentialSecurity
}

type UpdateManagedCredentialDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateManagedCredentialResponse struct {
	ContentType                                         string
	ManagedCredential                                   *shared.ManagedCredential
	StatusCode                                          int64
	UpdateManagedCredentialDefaultApplicationJSONObject *UpdateManagedCredentialDefaultApplicationJSON
}
