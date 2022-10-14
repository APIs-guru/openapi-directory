package operations

import (
	"openapi/pkg/models/shared"
)

type DisableManagedServicePathParams struct {
	ServiceID int64 `pathParam:"style=simple,explode=false,name=serviceId"`
}

type DisableManagedServiceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DisableManagedServiceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DisableManagedServiceSecurity struct {
	Option1 *DisableManagedServiceSecurityOption1 `security:"option"`
	Option2 *DisableManagedServiceSecurityOption2 `security:"option"`
}

type DisableManagedServiceRequest struct {
	PathParams DisableManagedServicePathParams
	Security   DisableManagedServiceSecurity
}

type DisableManagedServiceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DisableManagedServiceResponse struct {
	ContentType                                       string
	ManagedService                                    *shared.ManagedService
	StatusCode                                        int64
	DisableManagedServiceDefaultApplicationJSONObject *DisableManagedServiceDefaultApplicationJSON
}
