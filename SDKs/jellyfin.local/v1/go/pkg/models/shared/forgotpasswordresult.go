package shared

import (
	"time"
)

type ForgotPasswordResult struct {
	Action            *ForgotPasswordActionEnum `json:"Action"`
	PinExpirationDate *time.Time                `json:"PinExpirationDate"`
	PinFile           *string                   `json:"PinFile"`
}
