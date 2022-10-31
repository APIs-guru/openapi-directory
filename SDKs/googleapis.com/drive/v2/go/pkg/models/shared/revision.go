package shared

import (
	"time"
)

type Revision struct {
	DownloadURL            *string           `json:"downloadUrl,omitempty"`
	Etag                   *string           `json:"etag,omitempty"`
	ExportLinks            map[string]string `json:"exportLinks,omitempty"`
	FileSize               *string           `json:"fileSize,omitempty"`
	ID                     *string           `json:"id,omitempty"`
	Kind                   *string           `json:"kind,omitempty"`
	LastModifyingUser      *User             `json:"lastModifyingUser,omitempty"`
	LastModifyingUserName  *string           `json:"lastModifyingUserName,omitempty"`
	Md5Checksum            *string           `json:"md5Checksum,omitempty"`
	MimeType               *string           `json:"mimeType,omitempty"`
	ModifiedDate           *time.Time        `json:"modifiedDate,omitempty"`
	OriginalFilename       *string           `json:"originalFilename,omitempty"`
	Pinned                 *bool             `json:"pinned,omitempty"`
	PublishAuto            *bool             `json:"publishAuto,omitempty"`
	Published              *bool             `json:"published,omitempty"`
	PublishedLink          *string           `json:"publishedLink,omitempty"`
	PublishedOutsideDomain *bool             `json:"publishedOutsideDomain,omitempty"`
	SelfLink               *string           `json:"selfLink,omitempty"`
}
