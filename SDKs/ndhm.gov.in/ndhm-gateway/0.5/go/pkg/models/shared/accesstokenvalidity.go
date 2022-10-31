package shared

import (
"time")

type AccessTokenValidity struct {
    Expiry time.Time `json:"expiry"`
    Limit int64 `json:"limit"`
    Purpose PatientAuthPurposeEnum `json:"purpose"`
    Requester PatientAuthRequester `json:"requester"`
    
}

