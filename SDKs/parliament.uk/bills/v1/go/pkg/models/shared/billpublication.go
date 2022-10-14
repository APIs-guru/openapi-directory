package shared

import (
	"time"
)

type BillPublication struct {
	DisplayDate     *time.Time            `json:"displayDate,omitempty"`
	Files           []PublicationDocument `json:"files,omitempty"`
	House           *HouseEnum            `json:"house,omitempty"`
	ID              *int32                `json:"id,omitempty"`
	Links           []PublicationLink     `json:"links,omitempty"`
	PublicationType *PublicationType      `json:"publicationType,omitempty"`
	Title           *string               `json:"title,omitempty"`
}
