package shared

import (
	"time"
)

// Project
// Represents a project
type Project struct {
	Created      *time.Time       `json:"created,omitempty"`
	Description  *string          `json:"description,omitempty"`
	ID           *string          `json:"id,omitempty"`
	LastModified *time.Time       `json:"lastModified,omitempty"`
	Name         *string          `json:"name,omitempty"`
	Settings     *ProjectSettings `json:"settings,omitempty"`
	ThumbnailURI *string          `json:"thumbnailUri,omitempty"`
}

// ProjectInput
// Represents a project
type ProjectInput struct {
	Description *string          `json:"description,omitempty" form:"name=description"`
	Name        *string          `json:"name,omitempty" form:"name=name"`
	Settings    *ProjectSettings `json:"settings,omitempty" form:"name=settings"`
}
