package shared

import (
"time")

type PatientAuthInitRequestQuery struct {
    AuthMode *AuthenticationModeEnum `json:"authMode,omitempty"`
    ID string `json:"id"`
    Purpose PatientAuthPurposeEnum `json:"purpose"`
    Requester PatientAuthRequester `json:"requester"`
    
}

type PatientAuthInitRequest struct {
    Query PatientAuthInitRequestQuery `json:"query"`
    RequestID string `json:"requestId"`
    Timestamp time.Time `json:"timestamp"`
    
}

