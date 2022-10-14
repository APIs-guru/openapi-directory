package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteManagedCredentialPathParams struct {
	CredentialID int64 `pathParam:"style=simple,explode=false,name=credentialId"`
}

type DeleteManagedCredentialSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteManagedCredentialSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteManagedCredentialSecurity struct {
	Option1 *DeleteManagedCredentialSecurityOption1 `security:"option"`
	Option2 *DeleteManagedCredentialSecurityOption2 `security:"option"`
}

type DeleteManagedCredentialRequest struct {
	PathParams DeleteManagedCredentialPathParams
	Security   DeleteManagedCredentialSecurity
}

type DeleteManagedCredentialDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteManagedCredentialResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	DeleteManagedCredential200ApplicationJSONObject     map[string]interface{}
	DeleteManagedCredentialDefaultApplicationJSONObject *DeleteManagedCredentialDefaultApplicationJSON
}
