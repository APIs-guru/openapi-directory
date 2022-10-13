package shared

import (
	"time"
)

type DiscountResponse struct {
	Amount            *Price    `json:"amount"`
	Created           time.Time `json:"created"`
	Description       *string   `json:"description"`
	Etag              string    `json:"etag"`
	ExternalReference *string   `json:"externalReference"`
	ImageLookupKeys   []string  `json:"imageLookupKeys"`
	Name              string    `json:"name"`
	Percentage        *float64  `json:"percentage"`
	Updated           time.Time `json:"updated"`
	UpdatedBy         *string   `json:"updatedBy"`
	UUID              string    `json:"uuid"`
}
