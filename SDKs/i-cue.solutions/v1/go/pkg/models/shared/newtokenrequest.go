package shared

import (
"time")

type NewTokenRequest struct {
    EntityToken *string `json:"entityToken,omitempty"`
    ExpirationDate *time.Time `json:"expirationDate,omitempty"`
    UserToken *string `json:"userToken,omitempty"`
    
}

