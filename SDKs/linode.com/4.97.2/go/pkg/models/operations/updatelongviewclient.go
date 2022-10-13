package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLongviewClientPathParams struct {
	ClientID int64 `pathParam:"style=simple,explode=false,name=clientId"`
}

type UpdateLongviewClientSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateLongviewClientSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateLongviewClientSecurity struct {
	Option1 *UpdateLongviewClientSecurityOption1 `security:"option"`
	Option2 *UpdateLongviewClientSecurityOption2 `security:"option"`
}

type UpdateLongviewClientRequest struct {
	PathParams UpdateLongviewClientPathParams
	Request    shared.LongviewClient `request:"mediaType=application/json"`
	Security   UpdateLongviewClientSecurity
}

type UpdateLongviewClientDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type UpdateLongviewClientResponse struct {
	ContentType                                      string
	LongviewClient                                   *shared.LongviewClient
	StatusCode                                       int64
	UpdateLongviewClientDefaultApplicationJSONObject *UpdateLongviewClientDefaultApplicationJSON
}
