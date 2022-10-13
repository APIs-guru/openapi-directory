package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedServicePathParams struct {
	ServiceID int64 `pathParam:"style=simple,explode=false,name=serviceId"`
}

type GetManagedServiceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetManagedServiceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetManagedServiceSecurity struct {
	Option1 *GetManagedServiceSecurityOption1 `security:"option"`
	Option2 *GetManagedServiceSecurityOption2 `security:"option"`
}

type GetManagedServiceRequest struct {
	PathParams GetManagedServicePathParams
	Security   GetManagedServiceSecurity
}

type GetManagedServiceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetManagedServiceResponse struct {
	ContentType                                   string
	ManagedService                                *shared.ManagedService
	StatusCode                                    int64
	GetManagedServiceDefaultApplicationJSONObject *GetManagedServiceDefaultApplicationJSON
}
