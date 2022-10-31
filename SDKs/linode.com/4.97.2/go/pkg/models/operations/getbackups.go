package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetBackupsPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetBackupsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetBackupsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetBackupsSecurity struct {
	Option1 *GetBackupsSecurityOption1 `security:"option"`
	Option2 *GetBackupsSecurityOption2 `security:"option"`
}

type GetBackupsRequest struct {
	PathParams GetBackupsPathParams
	Security   GetBackupsSecurity
}

type GetBackups200ApplicationJSONAutomaticDisks struct {
	Filesystem *shared.FilesystemEnum `json:"filesystem,omitempty"`
	Label      *string                `json:"label,omitempty"`
	Size       *int64                 `json:"size,omitempty"`
}

type GetBackups200ApplicationJSONAutomaticStatusEnum string

const (
	GetBackups200ApplicationJSONAutomaticStatusEnumPaused              GetBackups200ApplicationJSONAutomaticStatusEnum = "paused"
	GetBackups200ApplicationJSONAutomaticStatusEnumPending             GetBackups200ApplicationJSONAutomaticStatusEnum = "pending"
	GetBackups200ApplicationJSONAutomaticStatusEnumRunning             GetBackups200ApplicationJSONAutomaticStatusEnum = "running"
	GetBackups200ApplicationJSONAutomaticStatusEnumNeedsPostProcessing GetBackups200ApplicationJSONAutomaticStatusEnum = "needsPostProcessing"
	GetBackups200ApplicationJSONAutomaticStatusEnumSuccessful          GetBackups200ApplicationJSONAutomaticStatusEnum = "successful"
	GetBackups200ApplicationJSONAutomaticStatusEnumFailed              GetBackups200ApplicationJSONAutomaticStatusEnum = "failed"
	GetBackups200ApplicationJSONAutomaticStatusEnumUserAborted         GetBackups200ApplicationJSONAutomaticStatusEnum = "userAborted"
)

type GetBackups200ApplicationJSONAutomatic struct {
	Configs  []string                                         `json:"configs,omitempty"`
	Created  *time.Time                                       `json:"created,omitempty"`
	Disks    []GetBackups200ApplicationJSONAutomaticDisks     `json:"disks,omitempty"`
	Finished *time.Time                                       `json:"finished,omitempty"`
	ID       *int64                                           `json:"id,omitempty"`
	Label    *string                                          `json:"label,omitempty"`
	Status   *GetBackups200ApplicationJSONAutomaticStatusEnum `json:"status,omitempty"`
	Type     *string                                          `json:"type,omitempty"`
	Updated  *time.Time                                       `json:"updated,omitempty"`
}

type GetBackups200ApplicationJSONSnapshot struct {
	Current    *shared.Backup `json:"current,omitempty"`
	InProgress *shared.Backup `json:"in_progress,omitempty"`
}

type GetBackups200ApplicationJSON struct {
	Automatic []GetBackups200ApplicationJSONAutomatic `json:"automatic,omitempty"`
	Snapshot  *GetBackups200ApplicationJSONSnapshot   `json:"snapshot,omitempty"`
}

type GetBackupsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetBackupsResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetBackups200ApplicationJSONObject     *GetBackups200ApplicationJSON
	GetBackupsDefaultApplicationJSONObject *GetBackupsDefaultApplicationJSON
}
