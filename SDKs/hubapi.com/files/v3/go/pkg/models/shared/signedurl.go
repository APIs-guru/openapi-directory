package shared

import (
"time")

type SignedURL struct {
    ExpiresAt time.Time `json:"expiresAt"`
    Extension string `json:"extension"`
    Height *int32 `json:"height,omitempty"`
    Name string `json:"name"`
    Size int32 `json:"size"`
    Type string `json:"type"`
    URL string `json:"url"`
    Width *int32 `json:"width,omitempty"`
    
}

