package operations

import (
	"openapi/pkg/models/shared"
)

type CreateManagedContactSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateManagedContactSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateManagedContactSecurity struct {
	Option1 *CreateManagedContactSecurityOption1 `security:"option"`
	Option2 *CreateManagedContactSecurityOption2 `security:"option"`
}

type CreateManagedContactRequest struct {
	Request  *shared.ManagedContact `request:"mediaType=application/json"`
	Security CreateManagedContactSecurity
}

type CreateManagedContactDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type CreateManagedContactResponse struct {
	ContentType                                      string
	ManagedContact                                   *shared.ManagedContact
	StatusCode                                       int64
	CreateManagedContactDefaultApplicationJSONObject *CreateManagedContactDefaultApplicationJSON
}
