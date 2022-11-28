package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateManagedCredentialUsernamePasswordPathParams struct {
	CredentialID int64 `pathParam:"style=simple,explode=false,name=credentialId"`
}

type UpdateManagedCredentialUsernamePasswordSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateManagedCredentialUsernamePasswordDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateManagedCredentialUsernamePasswordRequest struct {
	PathParams UpdateManagedCredentialUsernamePasswordPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   UpdateManagedCredentialUsernamePasswordSecurity
}

type UpdateManagedCredentialUsernamePasswordResponse struct {
	ContentType                                                         string
	StatusCode                                                          int64
	UpdateManagedCredentialUsernamePassword200ApplicationJSONObject     map[string]interface{}
	UpdateManagedCredentialUsernamePasswordDefaultApplicationJSONObject *UpdateManagedCredentialUsernamePasswordDefaultApplicationJSON
}
