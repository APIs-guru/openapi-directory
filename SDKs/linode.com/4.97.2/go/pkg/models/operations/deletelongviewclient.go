package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLongviewClientPathParams struct {
	ClientID int64 `pathParam:"style=simple,explode=false,name=clientId"`
}

type DeleteLongviewClientSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteLongviewClientDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteLongviewClientRequest struct {
	PathParams DeleteLongviewClientPathParams
	Security   DeleteLongviewClientSecurity
}

type DeleteLongviewClientResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	DeleteLongviewClient200ApplicationJSONObject     map[string]interface{}
	DeleteLongviewClientDefaultApplicationJSONObject *DeleteLongviewClientDefaultApplicationJSON
}
