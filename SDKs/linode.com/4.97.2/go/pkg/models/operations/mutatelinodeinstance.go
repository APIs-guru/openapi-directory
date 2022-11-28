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

type MutateLinodeInstanceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type MutateLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type MutateLinodeInstanceRequest struct {
	PathParams MutateLinodeInstancePathParams
	Request    *MutateLinodeInstanceRequestBody `request:"mediaType=application/json"`
	Security   MutateLinodeInstanceSecurity
}

type MutateLinodeInstanceResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	MutateLinodeInstance200ApplicationJSONObject     map[string]interface{}
	MutateLinodeInstanceDefaultApplicationJSONObject *MutateLinodeInstanceDefaultApplicationJSON
}
