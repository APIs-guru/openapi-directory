package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateManagedServicePathParams struct {
	ServiceID int64 `pathParam:"style=simple,explode=false,name=serviceId"`
}

type UpdateManagedServiceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateManagedServiceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateManagedServiceRequest struct {
	PathParams UpdateManagedServicePathParams
	Request    shared.ManagedServiceInput `request:"mediaType=application/json"`
	Security   UpdateManagedServiceSecurity
}

type UpdateManagedServiceResponse struct {
	ContentType                                      string
	ManagedService                                   *shared.ManagedService
	StatusCode                                       int64
	UpdateManagedServiceDefaultApplicationJSONObject *UpdateManagedServiceDefaultApplicationJSON
}
