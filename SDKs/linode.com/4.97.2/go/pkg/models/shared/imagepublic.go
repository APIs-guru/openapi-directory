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

type ImagePublic struct {
	Created     *time.Time             `json:"created"`
	CreatedBy   *string                `json:"created_by"`
	Deprecated  *bool                  `json:"deprecated"`
	Description *string                `json:"description"`
	Eol         *time.Time             `json:"eol"`
	Expiry      *time.Time             `json:"expiry"`
	ID          *string                `json:"id"`
	IsPublic    *bool                  `json:"is_public"`
	Label       *string                `json:"label"`
	Size        *int64                 `json:"size"`
	Status      *ImagePublicStatusEnum `json:"status"`
	Type        *ImagePublicTypeEnum   `json:"type"`
	Updated     *time.Time             `json:"updated"`
	Vendor      *string                `json:"vendor"`
}
