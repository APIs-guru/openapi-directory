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

// ImagePrivate
// Private Image object
type ImagePrivate struct {
	Created     *time.Time              `json:"created,omitempty"`
	CreatedBy   *string                 `json:"created_by,omitempty"`
	Deprecated  *bool                   `json:"deprecated,omitempty"`
	Description *string                 `json:"description,omitempty"`
	Eol         *time.Time              `json:"eol,omitempty"`
	Expiry      *time.Time              `json:"expiry,omitempty"`
	ID          *string                 `json:"id,omitempty"`
	IsPublic    *bool                   `json:"is_public,omitempty"`
	Label       *string                 `json:"label,omitempty"`
	Size        *int64                  `json:"size,omitempty"`
	Status      *ImagePrivateStatusEnum `json:"status,omitempty"`
	Type        *ImagePrivateTypeEnum   `json:"type,omitempty"`
	Updated     *time.Time              `json:"updated,omitempty"`
	Vendor      *string                 `json:"vendor,omitempty"`
}

// ImagePrivateInput
// Private Image object
type ImagePrivateInput struct {
	Description *string                 `json:"description,omitempty"`
	Label       *string                 `json:"label,omitempty"`
	Status      *ImagePrivateStatusEnum `json:"status,omitempty"`
}
