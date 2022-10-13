package shared

import (
	"time"
)

type Revision struct {
	ExportLinks            map[string]string `json:"exportLinks"`
	ID                     *string           `json:"id"`
	KeepForever            *bool             `json:"keepForever"`
	Kind                   *string           `json:"kind"`
	LastModifyingUser      *User             `json:"lastModifyingUser"`
	Md5Checksum            *string           `json:"md5Checksum"`
	MimeType               *string           `json:"mimeType"`
	ModifiedTime           *time.Time        `json:"modifiedTime"`
	OriginalFilename       *string           `json:"originalFilename"`
	PublishAuto            *bool             `json:"publishAuto"`
	Published              *bool             `json:"published"`
	PublishedLink          *string           `json:"publishedLink"`
	PublishedOutsideDomain *bool             `json:"publishedOutsideDomain"`
	Size                   *string           `json:"size"`
}
