package shared

import (
	"time"
)

type PersonalAccessToken struct {
	Created *time.Time `json:"created"`
	Expiry  *time.Time `json:"expiry"`
	ID      *int64     `json:"id"`
	Label   *string    `json:"label"`
	Scopes  *string    `json:"scopes"`
	Token   *string    `json:"token"`
}
