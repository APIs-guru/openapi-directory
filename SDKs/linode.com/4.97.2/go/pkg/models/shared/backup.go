package shared

import (
	"time"
)

type BackupDisks struct {
	Filesystem *FilesystemEnum `json:"filesystem"`
	Label      *string         `json:"label"`
	Size       *int64          `json:"size"`
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

type Backup struct {
	Configs  []string          `json:"configs"`
	Created  *time.Time        `json:"created"`
	Disks    []BackupDisks     `json:"disks"`
	Finished *time.Time        `json:"finished"`
	ID       *int64            `json:"id"`
	Label    *string           `json:"label"`
	Status   *BackupStatusEnum `json:"status"`
	Type     *BackupTypeEnum   `json:"type"`
	Updated  *time.Time        `json:"updated"`
}
