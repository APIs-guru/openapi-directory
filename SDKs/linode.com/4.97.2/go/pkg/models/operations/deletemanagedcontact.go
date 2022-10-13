package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteManagedContactPathParams struct {
	ContactID int64 `pathParam:"style=simple,explode=false,name=contactId"`
}

type DeleteManagedContactSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteManagedContactSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteManagedContactSecurity struct {
	Option1 *DeleteManagedContactSecurityOption1 `security:"option"`
	Option2 *DeleteManagedContactSecurityOption2 `security:"option"`
}

type DeleteManagedContactRequest struct {
	PathParams DeleteManagedContactPathParams
	Security   DeleteManagedContactSecurity
}

type DeleteManagedContactDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type DeleteManagedContactResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	DeleteManagedContact200ApplicationJSONObject     map[string]interface{}
	DeleteManagedContactDefaultApplicationJSONObject *DeleteManagedContactDefaultApplicationJSON
}
