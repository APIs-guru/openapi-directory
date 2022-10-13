package operations

import (
	"openapi/pkg/models/shared"
)

type MigrateLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type MigrateLinodeInstanceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type MigrateLinodeInstanceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type MigrateLinodeInstanceSecurity struct {
	Option1 *MigrateLinodeInstanceSecurityOption1 `security:"option"`
	Option2 *MigrateLinodeInstanceSecurityOption2 `security:"option"`
}

type MigrateLinodeInstanceRequest struct {
	PathParams MigrateLinodeInstancePathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   MigrateLinodeInstanceSecurity
}

type MigrateLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type MigrateLinodeInstanceResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	MigrateLinodeInstance200ApplicationJSONObject     map[string]interface{}
	MigrateLinodeInstanceDefaultApplicationJSONObject *MigrateLinodeInstanceDefaultApplicationJSON
}
