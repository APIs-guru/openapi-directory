package operations

import (
	"openapi/pkg/models/shared"
)

type GetBackupPathParams struct {
	BackupID int64 `pathParam:"style=simple,explode=false,name=backupId"`
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetBackupSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetBackupDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetBackupRequest struct {
	PathParams GetBackupPathParams
	Security   GetBackupSecurity
}

type GetBackupResponse struct {
	Backup                                *shared.Backup
	ContentType                           string
	StatusCode                            int64
	GetBackupDefaultApplicationJSONObject *GetBackupDefaultApplicationJSON
}
