package shared

import (
"time")

type Document struct {
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Filename *string `json:"filename,omitempty"`
    ID *string `json:"id,omitempty"`
    Mimetype *string `json:"mimetype,omitempty"`
    Size *int64 `json:"size,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

