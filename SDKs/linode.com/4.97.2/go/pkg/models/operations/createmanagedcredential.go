package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateManagedCredentialRequestBody struct {
	ID            *int64     `json:"id"`
	Label         string     `json:"label"`
	LastDecrypted *time.Time `json:"last_decrypted"`
	Password      string     `json:"password"`
	Username      *string    `json:"username"`
}

type CreateManagedCredentialSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateManagedCredentialSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateManagedCredentialSecurity struct {
	Option1 *CreateManagedCredentialSecurityOption1 `security:"option"`
	Option2 *CreateManagedCredentialSecurityOption2 `security:"option"`
}

type CreateManagedCredentialRequest struct {
	Request  *CreateManagedCredentialRequestBody `request:"mediaType=application/json"`
	Security CreateManagedCredentialSecurity
}

type CreateManagedCredentialDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type CreateManagedCredentialResponse struct {
	ContentType                                         string
	ManagedCredential                                   *shared.ManagedCredential
	StatusCode                                          int64
	CreateManagedCredentialDefaultApplicationJSONObject *CreateManagedCredentialDefaultApplicationJSON
}
