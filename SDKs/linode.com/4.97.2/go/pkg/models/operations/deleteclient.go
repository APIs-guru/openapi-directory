package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteClientPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
}

type DeleteClientSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteClientDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteClientRequest struct {
	PathParams DeleteClientPathParams
	Security   DeleteClientSecurity
}

type DeleteClientResponse struct {
	ContentType                              string
	StatusCode                               int64
	DeleteClient200ApplicationJSONObject     map[string]interface{}
	DeleteClientDefaultApplicationJSONObject *DeleteClientDefaultApplicationJSON
}
