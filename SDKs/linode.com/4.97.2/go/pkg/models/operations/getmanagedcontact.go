package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedContactPathParams struct {
	ContactID int64 `pathParam:"style=simple,explode=false,name=contactId"`
}

type GetManagedContactSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetManagedContactDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetManagedContactRequest struct {
	PathParams GetManagedContactPathParams
	Security   GetManagedContactSecurity
}

type GetManagedContactResponse struct {
	ContentType                                   string
	ManagedContact                                *shared.ManagedContact
	StatusCode                                    int64
	GetManagedContactDefaultApplicationJSONObject *GetManagedContactDefaultApplicationJSON
}
