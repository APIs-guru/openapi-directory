package shared

import (
"time")

type AuthorizedApp struct {
    Created *time.Time `json:"created,omitempty"`
    Expiry *time.Time `json:"expiry,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    Scopes *string `json:"scopes,omitempty"`
    ThumbnailURL *string `json:"thumbnail_url,omitempty"`
    Website *string `json:"website,omitempty"`
    
}

