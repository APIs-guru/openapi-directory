package shared

import (
	"time"
)

type Aggregate struct {
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	DateAdded    *time.Time             `json:"date_added"`
	Description  *string                `json:"description"`
	Family       *int64                 `json:"family"`
	ID           *int64                 `json:"id"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Prefix       string                 `json:"prefix"`
	Rir          NestedRir              `json:"rir"`
	Tags         []string               `json:"tags"`
}
