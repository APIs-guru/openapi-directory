package shared

import (
	"time"
)

type DiskFilesystemEnum string

const (
	DiskFilesystemEnumRaw    DiskFilesystemEnum = "raw"
	DiskFilesystemEnumSwap   DiskFilesystemEnum = "swap"
	DiskFilesystemEnumExt3   DiskFilesystemEnum = "ext3"
	DiskFilesystemEnumExt4   DiskFilesystemEnum = "ext4"
	DiskFilesystemEnumInitrd DiskFilesystemEnum = "initrd"
)

type DiskStatusEnum string

const (
	DiskStatusEnumReady    DiskStatusEnum = "ready"
	DiskStatusEnumNotReady DiskStatusEnum = "not ready"
	DiskStatusEnumDeleting DiskStatusEnum = "deleting"
)

type Disk struct {
	Created    *time.Time          `json:"created"`
	Filesystem *DiskFilesystemEnum `json:"filesystem"`
	ID         *int64              `json:"id"`
	Label      *string             `json:"label"`
	Size       *int64              `json:"size"`
	Status     *DiskStatusEnum     `json:"status"`
	Updated    *time.Time          `json:"updated"`
}
