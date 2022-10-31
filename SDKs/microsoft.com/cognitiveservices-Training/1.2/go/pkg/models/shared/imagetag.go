package shared

import (
"time")

type ImageTag struct {
    Created *time.Time `json:"Created,omitempty"`
    TagID *string `json:"TagId,omitempty"`
    
}

