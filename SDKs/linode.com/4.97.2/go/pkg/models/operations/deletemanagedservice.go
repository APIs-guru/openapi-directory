package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteManagedServicePathParams struct {
	ServiceID int64 `pathParam:"style=simple,explode=false,name=serviceId"`
}

type DeleteManagedServiceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteManagedServiceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteManagedServiceRequest struct {
	PathParams DeleteManagedServicePathParams
	Security   DeleteManagedServiceSecurity
}

type DeleteManagedServiceResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	DeleteManagedService200ApplicationJSONObject     map[string]interface{}
	DeleteManagedServiceDefaultApplicationJSONObject *DeleteManagedServiceDefaultApplicationJSON
}
