package shared

import (
	"time"
)

type Publication struct {
	DisplayDate     *time.Time            `json:"displayDate"`
	Files           []PublicationDocument `json:"files"`
	ID              *int32                `json:"id"`
	Links           []PublicationLink     `json:"links"`
	PublicationType *PublicationType      `json:"publicationType"`
	Title           *string               `json:"title"`
}
