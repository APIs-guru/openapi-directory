package operations

import (
	"openapi/pkg/models/shared"
)

type EnableManagedServicePathParams struct {
	ServiceID int64 `pathParam:"style=simple,explode=false,name=serviceId"`
}

type EnableManagedServiceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type EnableManagedServiceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type EnableManagedServiceSecurity struct {
	Option1 *EnableManagedServiceSecurityOption1 `security:"option"`
	Option2 *EnableManagedServiceSecurityOption2 `security:"option"`
}

type EnableManagedServiceRequest struct {
	PathParams EnableManagedServicePathParams
	Security   EnableManagedServiceSecurity
}

type EnableManagedServiceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type EnableManagedServiceResponse struct {
	ContentType                                      string
	ManagedService                                   *shared.ManagedService
	StatusCode                                       int64
	EnableManagedServiceDefaultApplicationJSONObject *EnableManagedServiceDefaultApplicationJSON
}
