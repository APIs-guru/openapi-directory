package shared

import (
	"time"
)

type Publication struct {
	DisplayDate     *time.Time            `json:"displayDate,omitempty"`
	Files           []PublicationDocument `json:"files,omitempty"`
	ID              *int32                `json:"id,omitempty"`
	Links           []PublicationLink     `json:"links,omitempty"`
	PublicationType *PublicationType      `json:"publicationType,omitempty"`
	Title           *string               `json:"title,omitempty"`
}
