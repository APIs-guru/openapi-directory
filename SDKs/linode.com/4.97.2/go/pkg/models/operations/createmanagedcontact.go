package operations

import (
	"openapi/pkg/models/shared"
)

type CreateManagedContactSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateManagedContactDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateManagedContactRequest struct {
	Request  *shared.ManagedContactInput `request:"mediaType=application/json"`
	Security CreateManagedContactSecurity
}

type CreateManagedContactResponse struct {
	ContentType                                      string
	ManagedContact                                   *shared.ManagedContact
	StatusCode                                       int64
	CreateManagedContactDefaultApplicationJSONObject *CreateManagedContactDefaultApplicationJSON
}
