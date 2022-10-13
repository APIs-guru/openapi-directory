package shared

import (
	"time"
)

type ImagePrivateStatusEnum string

const (
	ImagePrivateStatusEnumCreating      ImagePrivateStatusEnum = "creating"
	ImagePrivateStatusEnumPendingUpload ImagePrivateStatusEnum = "pending_upload"
	ImagePrivateStatusEnumAvailable     ImagePrivateStatusEnum = "available"
)

type ImagePrivateTypeEnum string

const (
	ImagePrivateTypeEnumManual    ImagePrivateTypeEnum = "manual"
	ImagePrivateTypeEnumAutomatic ImagePrivateTypeEnum = "automatic"
)

type ImagePrivate struct {
	Created     *time.Time              `json:"created"`
	CreatedBy   *string                 `json:"created_by"`
	Deprecated  *bool                   `json:"deprecated"`
	Description *string                 `json:"description"`
	Eol         *time.Time              `json:"eol"`
	Expiry      *time.Time              `json:"expiry"`
	ID          *string                 `json:"id"`
	IsPublic    *bool                   `json:"is_public"`
	Label       *string                 `json:"label"`
	Size        *int64                  `json:"size"`
	Status      *ImagePrivateStatusEnum `json:"status"`
	Type        *ImagePrivateTypeEnum   `json:"type"`
	Updated     *time.Time              `json:"updated"`
	Vendor      *string                 `json:"vendor"`
}
