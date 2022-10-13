package shared

import (
	"time"
)

type Revision struct {
	DownloadURL            *string           `json:"downloadUrl"`
	Etag                   *string           `json:"etag"`
	ExportLinks            map[string]string `json:"exportLinks"`
	FileSize               *string           `json:"fileSize"`
	ID                     *string           `json:"id"`
	Kind                   *string           `json:"kind"`
	LastModifyingUser      *User             `json:"lastModifyingUser"`
	LastModifyingUserName  *string           `json:"lastModifyingUserName"`
	Md5Checksum            *string           `json:"md5Checksum"`
	MimeType               *string           `json:"mimeType"`
	ModifiedDate           *time.Time        `json:"modifiedDate"`
	OriginalFilename       *string           `json:"originalFilename"`
	Pinned                 *bool             `json:"pinned"`
	PublishAuto            *bool             `json:"publishAuto"`
	Published              *bool             `json:"published"`
	PublishedLink          *string           `json:"publishedLink"`
	PublishedOutsideDomain *bool             `json:"publishedOutsideDomain"`
	SelfLink               *string           `json:"selfLink"`
}
