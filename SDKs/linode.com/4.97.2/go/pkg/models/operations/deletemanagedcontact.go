package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteManagedContactPathParams struct {
	ContactID int64 `pathParam:"style=simple,explode=false,name=contactId"`
}

type DeleteManagedContactSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteManagedContactDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteManagedContactRequest struct {
	PathParams DeleteManagedContactPathParams
	Security   DeleteManagedContactSecurity
}

type DeleteManagedContactResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	DeleteManagedContact200ApplicationJSONObject     map[string]interface{}
	DeleteManagedContactDefaultApplicationJSONObject *DeleteManagedContactDefaultApplicationJSON
}
