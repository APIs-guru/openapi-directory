package shared

import (
"time")

type PersonalAccessToken struct {
    Created *time.Time `json:"created,omitempty"`
    Expiry *time.Time `json:"expiry,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    Scopes *string `json:"scopes,omitempty"`
    Token *string `json:"token,omitempty"`
    
}

