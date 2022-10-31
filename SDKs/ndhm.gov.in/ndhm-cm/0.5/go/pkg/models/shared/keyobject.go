package shared

import (
	"time"
)

type KeyObject struct {
	Expiry     time.Time `json:"expiry"`
	KeyValue   string    `json:"keyValue"`
	Parameters string    `json:"parameters"`
}
