package operations

import (
	"openapi/pkg/models/shared"
)

type MutateLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type MutateLinodeInstanceRequestBody struct {
	AllowAutoDiskResize *bool `json:"allow_auto_disk_resize,omitempty"`
}

type MutateLinodeInstanceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type MutateLinodeInstanceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type MutateLinodeInstanceSecurity struct {
	Option1 *MutateLinodeInstanceSecurityOption1 `security:"option"`
	Option2 *MutateLinodeInstanceSecurityOption2 `security:"option"`
}

type MutateLinodeInstanceRequest struct {
	PathParams MutateLinodeInstancePathParams
	Request    *MutateLinodeInstanceRequestBody `request:"mediaType=application/json"`
	Security   MutateLinodeInstanceSecurity
}

type MutateLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type MutateLinodeInstanceResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	MutateLinodeInstance200ApplicationJSONObject     map[string]interface{}
	MutateLinodeInstanceDefaultApplicationJSONObject *MutateLinodeInstanceDefaultApplicationJSON
}
