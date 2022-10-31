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

type RestoreBackupSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type RestoreBackupSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type RestoreBackupSecurity struct {
	Option1 *RestoreBackupSecurityOption1 `security:"option"`
	Option2 *RestoreBackupSecurityOption2 `security:"option"`
}

type RestoreBackupRequest struct {
	PathParams RestoreBackupPathParams
	Request    RestoreBackupRequestBody `request:"mediaType=application/json"`
	Security   RestoreBackupSecurity
}

type RestoreBackupDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type RestoreBackupResponse struct {
	ContentType                               string
	StatusCode                                int64
	RestoreBackup200ApplicationJSONObject     map[string]interface{}
	RestoreBackupDefaultApplicationJSONObject *RestoreBackupDefaultApplicationJSON
}
