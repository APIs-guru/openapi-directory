package shared

import (
	"time"
)

type Project struct {
	Created      *time.Time       `json:"created" form:"name=created"`
	Description  *string          `json:"description" form:"name=description"`
	ID           *string          `json:"id" form:"name=id"`
	LastModified *time.Time       `json:"lastModified" form:"name=lastModified"`
	Name         *string          `json:"name" form:"name=name"`
	Settings     *ProjectSettings `json:"settings" form:"name=settings"`
	ThumbnailURI *string          `json:"thumbnailUri" form:"name=thumbnailUri"`
}
