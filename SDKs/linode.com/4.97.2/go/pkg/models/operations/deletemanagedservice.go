package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteManagedServicePathParams struct {
	ServiceID int64 `pathParam:"style=simple,explode=false,name=serviceId"`
}

type DeleteManagedServiceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteManagedServiceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteManagedServiceSecurity struct {
	Option1 *DeleteManagedServiceSecurityOption1 `security:"option"`
	Option2 *DeleteManagedServiceSecurityOption2 `security:"option"`
}

type DeleteManagedServiceRequest struct {
	PathParams DeleteManagedServicePathParams
	Security   DeleteManagedServiceSecurity
}

type DeleteManagedServiceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type DeleteManagedServiceResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	DeleteManagedService200ApplicationJSONObject     map[string]interface{}
	DeleteManagedServiceDefaultApplicationJSONObject *DeleteManagedServiceDefaultApplicationJSON
}
