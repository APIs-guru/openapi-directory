package shared

import (
	"time"
)

type ImagePublicStatusEnum string

const (
	ImagePublicStatusEnumCreating      ImagePublicStatusEnum = "creating"
	ImagePublicStatusEnumPendingUpload ImagePublicStatusEnum = "pending_upload"
	ImagePublicStatusEnumAvailable     ImagePublicStatusEnum = "available"
)

type ImagePublicTypeEnum string

const (
	ImagePublicTypeEnumManual    ImagePublicTypeEnum = "manual"
	ImagePublicTypeEnumAutomatic ImagePublicTypeEnum = "automatic"
)

// ImagePublic
// Public Image object
type ImagePublic struct {
	Created     *time.Time             `json:"created,omitempty"`
	CreatedBy   *string                `json:"created_by,omitempty"`
	Deprecated  *bool                  `json:"deprecated,omitempty"`
	Description *string                `json:"description,omitempty"`
	Eol         *time.Time             `json:"eol,omitempty"`
	Expiry      *time.Time             `json:"expiry,omitempty"`
	ID          *string                `json:"id,omitempty"`
	IsPublic    *bool                  `json:"is_public,omitempty"`
	Label       *string                `json:"label,omitempty"`
	Size        *int64                 `json:"size,omitempty"`
	Status      *ImagePublicStatusEnum `json:"status,omitempty"`
	Type        *ImagePublicTypeEnum   `json:"type,omitempty"`
	Updated     *time.Time             `json:"updated,omitempty"`
	Vendor      *string                `json:"vendor,omitempty"`
}
