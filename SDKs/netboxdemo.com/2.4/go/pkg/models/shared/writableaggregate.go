package shared

import (
	"time"
)

type WritableAggregateInput struct {
	CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
	DateAdded    *time.Time             `json:"date_added,omitempty"`
	Description  *string                `json:"description,omitempty"`
	Prefix       string                 `json:"prefix"`
	Rir          int64                  `json:"rir"`
	Tags         []string               `json:"tags,omitempty"`
}
