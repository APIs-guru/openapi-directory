package shared

import (
	"time"
)

type WritableAggregate struct {
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	DateAdded    *time.Time             `json:"date_added"`
	Description  *string                `json:"description"`
	Family       *string                `json:"family"`
	ID           *int64                 `json:"id"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Prefix       string                 `json:"prefix"`
	Rir          int64                  `json:"rir"`
	Tags         []string               `json:"tags"`
}
