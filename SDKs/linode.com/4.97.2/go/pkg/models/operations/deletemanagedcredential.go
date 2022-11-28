package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteManagedCredentialPathParams struct {
	CredentialID int64 `pathParam:"style=simple,explode=false,name=credentialId"`
}

type DeleteManagedCredentialSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteManagedCredentialDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteManagedCredentialRequest struct {
	PathParams DeleteManagedCredentialPathParams
	Security   DeleteManagedCredentialSecurity
}

type DeleteManagedCredentialResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	DeleteManagedCredential200ApplicationJSONObject     map[string]interface{}
	DeleteManagedCredentialDefaultApplicationJSONObject *DeleteManagedCredentialDefaultApplicationJSON
}
