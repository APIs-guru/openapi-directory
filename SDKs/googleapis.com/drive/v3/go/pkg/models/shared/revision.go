package shared

import (
	"time"
)

type Revision struct {
	ExportLinks            map[string]string `json:"exportLinks,omitempty"`
	ID                     *string           `json:"id,omitempty"`
	KeepForever            *bool             `json:"keepForever,omitempty"`
	Kind                   *string           `json:"kind,omitempty"`
	LastModifyingUser      *User             `json:"lastModifyingUser,omitempty"`
	Md5Checksum            *string           `json:"md5Checksum,omitempty"`
	MimeType               *string           `json:"mimeType,omitempty"`
	ModifiedTime           *time.Time        `json:"modifiedTime,omitempty"`
	OriginalFilename       *string           `json:"originalFilename,omitempty"`
	PublishAuto            *bool             `json:"publishAuto,omitempty"`
	Published              *bool             `json:"published,omitempty"`
	PublishedLink          *string           `json:"publishedLink,omitempty"`
	PublishedOutsideDomain *bool             `json:"publishedOutsideDomain,omitempty"`
	Size                   *string           `json:"size,omitempty"`
}
