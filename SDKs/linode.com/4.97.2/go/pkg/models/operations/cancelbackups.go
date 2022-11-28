package operations

import (
	"openapi/pkg/models/shared"
)

type CancelBackupsPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type CancelBackupsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CancelBackupsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CancelBackupsRequest struct {
	PathParams CancelBackupsPathParams
	Security   CancelBackupsSecurity
}

type CancelBackupsResponse struct {
	ContentType                               string
	StatusCode                                int64
	CancelBackups200ApplicationJSONObject     map[string]interface{}
	CancelBackupsDefaultApplicationJSONObject *CancelBackupsDefaultApplicationJSON
}
