package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateManagedServicePathParams struct {
	ServiceID int64 `pathParam:"style=simple,explode=false,name=serviceId"`
}

type UpdateManagedServiceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateManagedServiceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateManagedServiceSecurity struct {
	Option1 *UpdateManagedServiceSecurityOption1 `security:"option"`
	Option2 *UpdateManagedServiceSecurityOption2 `security:"option"`
}

type UpdateManagedServiceRequest struct {
	PathParams UpdateManagedServicePathParams
	Request    shared.ManagedService `request:"mediaType=application/json"`
	Security   UpdateManagedServiceSecurity
}

type UpdateManagedServiceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateManagedServiceResponse struct {
	ContentType                                      string
	ManagedService                                   *shared.ManagedService
	StatusCode                                       int64
	UpdateManagedServiceDefaultApplicationJSONObject *UpdateManagedServiceDefaultApplicationJSON
}
