package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLongviewClientPathParams struct {
	ClientID int64 `pathParam:"style=simple,explode=false,name=clientId"`
}

type UpdateLongviewClientSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateLongviewClientDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateLongviewClientRequest struct {
	PathParams UpdateLongviewClientPathParams
	Request    shared.LongviewClientInput `request:"mediaType=application/json"`
	Security   UpdateLongviewClientSecurity
}

type UpdateLongviewClientResponse struct {
	ContentType                                      string
	LongviewClient                                   *shared.LongviewClient
	StatusCode                                       int64
	UpdateLongviewClientDefaultApplicationJSONObject *UpdateLongviewClientDefaultApplicationJSON
}
