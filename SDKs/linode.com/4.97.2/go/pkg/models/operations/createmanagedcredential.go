package operations

import (
	"openapi/pkg/models/shared"
)

type CreateManagedCredentialRequestBodyInput struct {
	Label    string  `json:"label"`
	Password string  `json:"password"`
	Username *string `json:"username,omitempty"`
}

type CreateManagedCredentialSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateManagedCredentialDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateManagedCredentialRequest struct {
	Request  *CreateManagedCredentialRequestBodyInput `request:"mediaType=application/json"`
	Security CreateManagedCredentialSecurity
}

type CreateManagedCredentialResponse struct {
	ContentType                                         string
	ManagedCredential                                   *shared.ManagedCredential
	StatusCode                                          int64
	CreateManagedCredentialDefaultApplicationJSONObject *CreateManagedCredentialDefaultApplicationJSON
}
