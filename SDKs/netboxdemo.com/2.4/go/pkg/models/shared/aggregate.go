package shared

import (
"time")

type Aggregate struct {
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    DateAdded *time.Time `json:"date_added,omitempty"`
    Description *string `json:"description,omitempty"`
    Family *int64 `json:"family,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    Prefix string `json:"prefix"`
    Rir NestedRir `json:"rir"`
    Tags []string `json:"tags,omitempty"`
    
}

