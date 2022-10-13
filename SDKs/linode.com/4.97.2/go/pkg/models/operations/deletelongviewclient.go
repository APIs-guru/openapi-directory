package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLongviewClientPathParams struct {
	ClientID int64 `pathParam:"style=simple,explode=false,name=clientId"`
}

type DeleteLongviewClientSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteLongviewClientSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteLongviewClientSecurity struct {
	Option1 *DeleteLongviewClientSecurityOption1 `security:"option"`
	Option2 *DeleteLongviewClientSecurityOption2 `security:"option"`
}

type DeleteLongviewClientRequest struct {
	PathParams DeleteLongviewClientPathParams
	Security   DeleteLongviewClientSecurity
}

type DeleteLongviewClientDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type DeleteLongviewClientResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	DeleteLongviewClient200ApplicationJSONObject     map[string]interface{}
	DeleteLongviewClientDefaultApplicationJSONObject *DeleteLongviewClientDefaultApplicationJSON
}
