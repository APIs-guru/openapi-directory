package operations

import (
	"openapi/pkg/models/shared"
)

type EnableManagedServicePathParams struct {
	ServiceID int64 `pathParam:"style=simple,explode=false,name=serviceId"`
}

type EnableManagedServiceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type EnableManagedServiceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type EnableManagedServiceRequest struct {
	PathParams EnableManagedServicePathParams
	Security   EnableManagedServiceSecurity
}

type EnableManagedServiceResponse struct {
	ContentType                                      string
	ManagedService                                   *shared.ManagedService
	StatusCode                                       int64
	EnableManagedServiceDefaultApplicationJSONObject *EnableManagedServiceDefaultApplicationJSON
}
