package operations

import (
	"openapi/pkg/models/shared"
)

type CancelBackupsPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type CancelBackupsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CancelBackupsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CancelBackupsSecurity struct {
	Option1 *CancelBackupsSecurityOption1 `security:"option"`
	Option2 *CancelBackupsSecurityOption2 `security:"option"`
}

type CancelBackupsRequest struct {
	PathParams CancelBackupsPathParams
	Security   CancelBackupsSecurity
}

type CancelBackupsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type CancelBackupsResponse struct {
	ContentType                               string
	StatusCode                                int64
	CancelBackups200ApplicationJSONObject     map[string]interface{}
	CancelBackupsDefaultApplicationJSONObject *CancelBackupsDefaultApplicationJSON
}
