package shared

import (
	"time"
)

type Reply struct {
	Action       *string    `json:"action,omitempty"`
	Author       *User      `json:"author,omitempty"`
	Content      *string    `json:"content,omitempty"`
	CreatedTime  *time.Time `json:"createdTime,omitempty"`
	Deleted      *bool      `json:"deleted,omitempty"`
	HTMLContent  *string    `json:"htmlContent,omitempty"`
	ID           *string    `json:"id,omitempty"`
	Kind         *string    `json:"kind,omitempty"`
	ModifiedTime *time.Time `json:"modifiedTime,omitempty"`
}
