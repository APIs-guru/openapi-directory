package operations

import (
	"openapi/pkg/models/shared"
)

type RescueLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type RescueLinodeInstanceRequestBody struct {
	Devices *shared.RescueDevices `json:"devices,omitempty"`
}

type RescueLinodeInstanceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type RescueLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type RescueLinodeInstanceRequest struct {
	PathParams RescueLinodeInstancePathParams
	Request    *RescueLinodeInstanceRequestBody `request:"mediaType=application/json"`
	Security   RescueLinodeInstanceSecurity
}

type RescueLinodeInstanceResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	RescueLinodeInstance200ApplicationJSONObject     map[string]interface{}
	RescueLinodeInstanceDefaultApplicationJSONObject *RescueLinodeInstanceDefaultApplicationJSON
}
