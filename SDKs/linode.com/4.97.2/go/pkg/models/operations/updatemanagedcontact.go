package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateManagedContactPathParams struct {
	ContactID int64 `pathParam:"style=simple,explode=false,name=contactId"`
}

type UpdateManagedContactSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateManagedContactDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateManagedContactRequest struct {
	PathParams UpdateManagedContactPathParams
	Request    shared.ManagedContactInput `request:"mediaType=application/json"`
	Security   UpdateManagedContactSecurity
}

type UpdateManagedContactResponse struct {
	ContentType                                      string
	ManagedContact                                   *shared.ManagedContact
	StatusCode                                       int64
	UpdateManagedContactDefaultApplicationJSONObject *UpdateManagedContactDefaultApplicationJSON
}
