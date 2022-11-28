package operations

import (
	"openapi/pkg/models/shared"
)

type RestoreBackupPathParams struct {
	BackupID int64 `pathParam:"style=simple,explode=false,name=backupId"`
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type RestoreBackupRequestBody struct {
	LinodeID  int64 `json:"linode_id"`
	Overwrite *bool `json:"overwrite,omitempty"`
}

type RestoreBackupSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type RestoreBackupDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type RestoreBackupRequest struct {
	PathParams RestoreBackupPathParams
	Request    RestoreBackupRequestBody `request:"mediaType=application/json"`
	Security   RestoreBackupSecurity
}

type RestoreBackupResponse struct {
	ContentType                               string
	StatusCode                                int64
	RestoreBackup200ApplicationJSONObject     map[string]interface{}
	RestoreBackupDefaultApplicationJSONObject *RestoreBackupDefaultApplicationJSON
}
