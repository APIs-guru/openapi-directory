package shared

import (
"time")


type VolumeStatusEnum string

const (
    VolumeStatusEnumCreating VolumeStatusEnum = "creating"
VolumeStatusEnumActive VolumeStatusEnum = "active"
VolumeStatusEnumResizing VolumeStatusEnum = "resizing"
VolumeStatusEnumContactSupport VolumeStatusEnum = "contact_support"
)


type Volume struct {
    Created *time.Time `json:"created,omitempty"`
    FilesystemPath *string `json:"filesystem_path,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Label string `json:"label"`
    LinodeID *int64 `json:"linode_id,omitempty"`
    LinodeLabel *string `json:"linode_label,omitempty"`
    Region *string `json:"region,omitempty"`
    Size *int64 `json:"size,omitempty"`
    Status *VolumeStatusEnum `json:"status,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    
}

