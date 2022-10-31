package shared

import (
"time")

type Campaign struct {
    ContactEmail *string `json:"contactEmail,omitempty"`
    Description *string `json:"description,omitempty"`
    EndDate *time.Time `json:"endDate,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Source *Source `json:"source,omitempty"`
    StartDate *time.Time `json:"startDate,omitempty"`
    
}

