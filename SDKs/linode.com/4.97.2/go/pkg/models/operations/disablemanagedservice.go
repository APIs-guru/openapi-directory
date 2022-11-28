package operations

import (
	"openapi/pkg/models/shared"
)

type DisableManagedServicePathParams struct {
	ServiceID int64 `pathParam:"style=simple,explode=false,name=serviceId"`
}

type DisableManagedServiceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DisableManagedServiceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DisableManagedServiceRequest struct {
	PathParams DisableManagedServicePathParams
	Security   DisableManagedServiceSecurity
}

type DisableManagedServiceResponse struct {
	ContentType                                       string
	ManagedService                                    *shared.ManagedService
	StatusCode                                        int64
	DisableManagedServiceDefaultApplicationJSONObject *DisableManagedServiceDefaultApplicationJSON
}
