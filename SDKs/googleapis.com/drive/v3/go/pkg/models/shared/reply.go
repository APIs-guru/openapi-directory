package shared

import (
	"time"
)

type Reply struct {
	Action       *string    `json:"action"`
	Author       *User      `json:"author"`
	Content      *string    `json:"content"`
	CreatedTime  *time.Time `json:"createdTime"`
	Deleted      *bool      `json:"deleted"`
	HTMLContent  *string    `json:"htmlContent"`
	ID           *string    `json:"id"`
	Kind         *string    `json:"kind"`
	ModifiedTime *time.Time `json:"modifiedTime"`
}
