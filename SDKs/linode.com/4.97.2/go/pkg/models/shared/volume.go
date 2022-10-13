package shared

import (
	"time"
)

type VolumeStatusEnum string

const (
	VolumeStatusEnumCreating       VolumeStatusEnum = "creating"
	VolumeStatusEnumActive         VolumeStatusEnum = "active"
	VolumeStatusEnumResizing       VolumeStatusEnum = "resizing"
	VolumeStatusEnumContactSupport VolumeStatusEnum = "contact_support"
)

type Volume struct {
	Created        *time.Time        `json:"created"`
	FilesystemPath *string           `json:"filesystem_path"`
	ID             *int64            `json:"id"`
	Label          string            `json:"label"`
	LinodeID       *int64            `json:"linode_id"`
	LinodeLabel    *string           `json:"linode_label"`
	Region         *string           `json:"region"`
	Size           *int64            `json:"size"`
	Status         *VolumeStatusEnum `json:"status"`
	Tags           []string          `json:"tags"`
	Updated        *time.Time        `json:"updated"`
}
