package shared

import (
	"time"
)

type FileAccessEnum string

const (
	FileAccessEnumPublicIndexable    FileAccessEnum = "PUBLIC_INDEXABLE"
	FileAccessEnumPublicNotIndexable FileAccessEnum = "PUBLIC_NOT_INDEXABLE"
	FileAccessEnumHiddenIndexable    FileAccessEnum = "HIDDEN_INDEXABLE"
	FileAccessEnumHiddenNotIndexable FileAccessEnum = "HIDDEN_NOT_INDEXABLE"
	FileAccessEnumHiddenPrivate      FileAccessEnum = "HIDDEN_PRIVATE"
	FileAccessEnumPrivate            FileAccessEnum = "PRIVATE"
)

// File
// File
type File struct {
	Access            FileAccessEnum `json:"access"`
	Archived          bool           `json:"archived"`
	ArchivedAt        *time.Time     `json:"archivedAt,omitempty"`
	CreatedAt         time.Time      `json:"createdAt"`
	DefaultHostingURL *string        `json:"defaultHostingUrl,omitempty"`
	Encoding          *string        `json:"encoding,omitempty"`
	Extension         *string        `json:"extension,omitempty"`
	Height            *int32         `json:"height,omitempty"`
	ID                string         `json:"id"`
	IsUsableInContent *bool          `json:"isUsableInContent,omitempty"`
	Name              *string        `json:"name,omitempty"`
	ParentFolderID    *string        `json:"parentFolderId,omitempty"`
	Path              *string        `json:"path,omitempty"`
	Size              *int64         `json:"size,omitempty"`
	Type              *string        `json:"type,omitempty"`
	UpdatedAt         time.Time      `json:"updatedAt"`
	URL               *string        `json:"url,omitempty"`
	Width             *int32         `json:"width,omitempty"`
}
