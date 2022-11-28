package shared

import (
	"time"
)

type BackupDisks struct {
	Filesystem *FilesystemEnum `json:"filesystem,omitempty"`
	Label      *string         `json:"label,omitempty"`
	Size       *int64          `json:"size,omitempty"`
}

type BackupStatusEnum string

const (
	BackupStatusEnumPaused              BackupStatusEnum = "paused"
	BackupStatusEnumPending             BackupStatusEnum = "pending"
	BackupStatusEnumRunning             BackupStatusEnum = "running"
	BackupStatusEnumNeedsPostProcessing BackupStatusEnum = "needsPostProcessing"
	BackupStatusEnumSuccessful          BackupStatusEnum = "successful"
	BackupStatusEnumFailed              BackupStatusEnum = "failed"
	BackupStatusEnumUserAborted         BackupStatusEnum = "userAborted"
)

type BackupTypeEnum string

const (
	BackupTypeEnumAuto     BackupTypeEnum = "auto"
	BackupTypeEnumSnapshot BackupTypeEnum = "snapshot"
)

// Backup
// An object representing a Backup or snapshot for a Linode with Backup service enabled.
type Backup struct {
	Configs  []string          `json:"configs,omitempty"`
	Created  *time.Time        `json:"created,omitempty"`
	Disks    []BackupDisks     `json:"disks,omitempty"`
	Finished *time.Time        `json:"finished,omitempty"`
	ID       *int64            `json:"id,omitempty"`
	Label    *string           `json:"label,omitempty"`
	Status   *BackupStatusEnum `json:"status,omitempty"`
	Type     *BackupTypeEnum   `json:"type,omitempty"`
	Updated  *time.Time        `json:"updated,omitempty"`
}
