package operations

import (
	"openapi/pkg/models/shared"
)

type RescueLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type RescueLinodeInstanceRequestBody struct {
	Devices *shared.RescueDevices `json:"devices"`
}

type RescueLinodeInstanceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type RescueLinodeInstanceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type RescueLinodeInstanceSecurity struct {
	Option1 *RescueLinodeInstanceSecurityOption1 `security:"option"`
	Option2 *RescueLinodeInstanceSecurityOption2 `security:"option"`
}

type RescueLinodeInstanceRequest struct {
	PathParams RescueLinodeInstancePathParams
	Request    *RescueLinodeInstanceRequestBody `request:"mediaType=application/json"`
	Security   RescueLinodeInstanceSecurity
}

type RescueLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type RescueLinodeInstanceResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	RescueLinodeInstance200ApplicationJSONObject     map[string]interface{}
	RescueLinodeInstanceDefaultApplicationJSONObject *RescueLinodeInstanceDefaultApplicationJSON
}
