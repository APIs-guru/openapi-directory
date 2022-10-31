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
	Created    *time.Time          `json:"created,omitempty"`
	Filesystem *DiskFilesystemEnum `json:"filesystem,omitempty"`
	ID         *int64              `json:"id,omitempty"`
	Label      *string             `json:"label,omitempty"`
	Size       *int64              `json:"size,omitempty"`
	Status     *DiskStatusEnum     `json:"status,omitempty"`
	Updated    *time.Time          `json:"updated,omitempty"`
}
