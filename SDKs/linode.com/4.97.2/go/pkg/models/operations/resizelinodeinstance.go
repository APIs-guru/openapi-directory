package operations

import (
	"openapi/pkg/models/shared"
)

type ResizeLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type ResizeLinodeInstanceRequestBody struct {
	AllowAutoDiskResize *bool  `json:"allow_auto_disk_resize,omitempty"`
	Type                string `json:"type"`
}

type ResizeLinodeInstanceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type ResizeLinodeInstanceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type ResizeLinodeInstanceSecurity struct {
	Option1 *ResizeLinodeInstanceSecurityOption1 `security:"option"`
	Option2 *ResizeLinodeInstanceSecurityOption2 `security:"option"`
}

type ResizeLinodeInstanceRequest struct {
	PathParams ResizeLinodeInstancePathParams
	Request    ResizeLinodeInstanceRequestBody `request:"mediaType=application/json"`
	Security   ResizeLinodeInstanceSecurity
}

type ResizeLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ResizeLinodeInstanceResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ResizeLinodeInstance200ApplicationJSONObject     map[string]interface{}
	ResizeLinodeInstanceDefaultApplicationJSONObject *ResizeLinodeInstanceDefaultApplicationJSON
}
