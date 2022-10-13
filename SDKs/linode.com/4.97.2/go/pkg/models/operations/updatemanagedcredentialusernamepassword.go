package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateManagedCredentialUsernamePasswordPathParams struct {
	CredentialID int64 `pathParam:"style=simple,explode=false,name=credentialId"`
}

type UpdateManagedCredentialUsernamePasswordSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateManagedCredentialUsernamePasswordSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateManagedCredentialUsernamePasswordSecurity struct {
	Option1 *UpdateManagedCredentialUsernamePasswordSecurityOption1 `security:"option"`
	Option2 *UpdateManagedCredentialUsernamePasswordSecurityOption2 `security:"option"`
}

type UpdateManagedCredentialUsernamePasswordRequest struct {
	PathParams UpdateManagedCredentialUsernamePasswordPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   UpdateManagedCredentialUsernamePasswordSecurity
}

type UpdateManagedCredentialUsernamePasswordDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type UpdateManagedCredentialUsernamePasswordResponse struct {
	ContentType                                                         string
	StatusCode                                                          int64
	UpdateManagedCredentialUsernamePassword200ApplicationJSONObject     map[string]interface{}
	UpdateManagedCredentialUsernamePasswordDefaultApplicationJSONObject *UpdateManagedCredentialUsernamePasswordDefaultApplicationJSON
}
