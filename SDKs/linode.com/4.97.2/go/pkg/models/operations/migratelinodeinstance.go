package operations

import (
	"openapi/pkg/models/shared"
)

type MigrateLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type MigrateLinodeInstanceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type MigrateLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type MigrateLinodeInstanceRequest struct {
	PathParams MigrateLinodeInstancePathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   MigrateLinodeInstanceSecurity
}

type MigrateLinodeInstanceResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	MigrateLinodeInstance200ApplicationJSONObject     map[string]interface{}
	MigrateLinodeInstanceDefaultApplicationJSONObject *MigrateLinodeInstanceDefaultApplicationJSON
}
