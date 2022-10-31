package shared

import (
"time")

type ForgotPasswordResult struct {
    Action *ForgotPasswordActionEnum `json:"Action,omitempty"`
    PinExpirationDate *time.Time `json:"PinExpirationDate,omitempty"`
    PinFile *string `json:"PinFile,omitempty"`
    
}

