package operations

import (
	"openapi/pkg/models/shared"
)

type BootLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type BootLinodeInstanceRequestBody struct {
	ConfigID *int64 `json:"config_id,omitempty"`
}

type BootLinodeInstanceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type BootLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type BootLinodeInstanceRequest struct {
	PathParams BootLinodeInstancePathParams
	Request    *BootLinodeInstanceRequestBody `request:"mediaType=application/json"`
	Security   BootLinodeInstanceSecurity
}

type BootLinodeInstanceResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	BootLinodeInstance200ApplicationJSONObject     map[string]interface{}
	BootLinodeInstanceDefaultApplicationJSONObject *BootLinodeInstanceDefaultApplicationJSON
}
