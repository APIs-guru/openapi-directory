package operations

import (
	"openapi/pkg/models/shared"
)

type EnableBackupsPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type EnableBackupsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type EnableBackupsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type EnableBackupsRequest struct {
	PathParams EnableBackupsPathParams
	Security   EnableBackupsSecurity
}

type EnableBackupsResponse struct {
	ContentType                               string
	StatusCode                                int64
	EnableBackups200ApplicationJSONObject     map[string]interface{}
	EnableBackupsDefaultApplicationJSONObject *EnableBackupsDefaultApplicationJSON
}
