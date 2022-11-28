package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedServicePathParams struct {
	ServiceID int64 `pathParam:"style=simple,explode=false,name=serviceId"`
}

type GetManagedServiceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetManagedServiceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetManagedServiceRequest struct {
	PathParams GetManagedServicePathParams
	Security   GetManagedServiceSecurity
}

type GetManagedServiceResponse struct {
	ContentType                                   string
	ManagedService                                *shared.ManagedService
	StatusCode                                    int64
	GetManagedServiceDefaultApplicationJSONObject *GetManagedServiceDefaultApplicationJSON
}
