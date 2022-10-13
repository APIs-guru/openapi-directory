package shared

import (
	"time"
)

type NewTokenRequest struct {
	EntityToken    *string    `json:"entityToken"`
	ExpirationDate *time.Time `json:"expirationDate"`
	UserToken      *string    `json:"userToken"`
}
