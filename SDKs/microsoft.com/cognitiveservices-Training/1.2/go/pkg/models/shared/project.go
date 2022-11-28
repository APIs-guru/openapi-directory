package shared

import (
	"time"
)

// Project
// Represents a project
type Project struct {
	Created            *time.Time       `json:"Created,omitempty"`
	CurrentIterationID *string          `json:"CurrentIterationId,omitempty"`
	Description        *string          `json:"Description,omitempty"`
	ID                 *string          `json:"Id,omitempty"`
	LastModified       *time.Time       `json:"LastModified,omitempty"`
	Name               *string          `json:"Name,omitempty"`
	Settings           *ProjectSettings `json:"Settings,omitempty"`
	ThumbnailURI       *string          `json:"ThumbnailUri,omitempty"`
}

// ProjectInput
// Represents a project
type ProjectInput struct {
	Description *string          `json:"Description,omitempty" form:"name=Description"`
	Name        *string          `json:"Name,omitempty" form:"name=Name"`
	Settings    *ProjectSettings `json:"Settings,omitempty" form:"name=Settings"`
}
