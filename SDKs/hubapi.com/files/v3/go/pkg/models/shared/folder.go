package shared

import (
	"time"
)

type Folder struct {
	Archived       bool       `json:"archived"`
	ArchivedAt     *time.Time `json:"archivedAt"`
	CreatedAt      time.Time  `json:"createdAt"`
	ID             string     `json:"id"`
	Name           *string    `json:"name"`
	ParentFolderID *string    `json:"parentFolderId"`
	Path           *string    `json:"path"`
	UpdatedAt      time.Time  `json:"updatedAt"`
}
