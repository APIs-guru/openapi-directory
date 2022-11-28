package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type DeleteLinodeInstanceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteLinodeInstanceRequest struct {
	PathParams DeleteLinodeInstancePathParams
	Security   DeleteLinodeInstanceSecurity
}

type DeleteLinodeInstanceResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	DeleteLinodeInstance200ApplicationJSONObject     map[string]interface{}
	DeleteLinodeInstanceDefaultApplicationJSONObject *DeleteLinodeInstanceDefaultApplicationJSON
}
