package operations

import (
	"openapi/pkg/models/shared"
)

type EnableBackupsPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type EnableBackupsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type EnableBackupsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type EnableBackupsSecurity struct {
	Option1 *EnableBackupsSecurityOption1 `security:"option"`
	Option2 *EnableBackupsSecurityOption2 `security:"option"`
}

type EnableBackupsRequest struct {
	PathParams EnableBackupsPathParams
	Security   EnableBackupsSecurity
}

type EnableBackupsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type EnableBackupsResponse struct {
	ContentType                               string
	StatusCode                                int64
	EnableBackups200ApplicationJSONObject     map[string]interface{}
	EnableBackupsDefaultApplicationJSONObject *EnableBackupsDefaultApplicationJSON
}
