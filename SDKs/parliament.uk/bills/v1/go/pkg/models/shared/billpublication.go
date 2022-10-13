package shared

import (
	"time"
)

type BillPublication struct {
	DisplayDate     *time.Time            `json:"displayDate"`
	Files           []PublicationDocument `json:"files"`
	House           *HouseEnum            `json:"house"`
	ID              *int32                `json:"id"`
	Links           []PublicationLink     `json:"links"`
	PublicationType *PublicationType      `json:"publicationType"`
	Title           *string               `json:"title"`
}
