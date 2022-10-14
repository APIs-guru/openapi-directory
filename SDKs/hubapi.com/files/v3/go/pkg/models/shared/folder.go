package shared

import (
	"time"
)

type Folder struct {
	Archived       bool       `json:"archived"`
	ArchivedAt     *time.Time `json:"archivedAt,omitempty"`
	CreatedAt      time.Time  `json:"createdAt"`
	ID             string     `json:"id"`
	Name           *string    `json:"name,omitempty"`
	ParentFolderID *string    `json:"parentFolderId,omitempty"`
	Path           *string    `json:"path,omitempty"`
	UpdatedAt      time.Time  `json:"updatedAt"`
}
