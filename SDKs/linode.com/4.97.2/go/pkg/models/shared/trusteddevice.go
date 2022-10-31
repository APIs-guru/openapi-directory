package shared

import (
"time")

type TrustedDevice struct {
    Created *time.Time `json:"created,omitempty"`
    Expiry *time.Time `json:"expiry,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastAuthenticated *time.Time `json:"last_authenticated,omitempty"`
    LastRemoteAddr *string `json:"last_remote_addr,omitempty"`
    UserAgent *string `json:"user_agent,omitempty"`
    
}

