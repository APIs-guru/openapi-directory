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

type File struct {
	Access            FileAccessEnum `json:"access"`
	Archived          bool           `json:"archived"`
	ArchivedAt        *time.Time     `json:"archivedAt"`
	CreatedAt         time.Time      `json:"createdAt"`
	DefaultHostingURL *string        `json:"defaultHostingUrl"`
	Encoding          *string        `json:"encoding"`
	Extension         *string        `json:"extension"`
	Height            *int32         `json:"height"`
	ID                string         `json:"id"`
	IsUsableInContent *bool          `json:"isUsableInContent"`
	Name              *string        `json:"name"`
	ParentFolderID    *string        `json:"parentFolderId"`
	Path              *string        `json:"path"`
	Size              *int64         `json:"size"`
	Type              *string        `json:"type"`
	UpdatedAt         time.Time      `json:"updatedAt"`
	URL               *string        `json:"url"`
	Width             *int32         `json:"width"`
}
