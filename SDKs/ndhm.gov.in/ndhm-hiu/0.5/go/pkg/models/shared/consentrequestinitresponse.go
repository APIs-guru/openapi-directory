package shared

import (
"time")

type ConsentRequestInitResponseConsentRequest struct {
    ID string `json:"id"`
    
}

type ConsentRequestInitResponse struct {
    ConsentRequest *ConsentRequestInitResponseConsentRequest `json:"consentRequest,omitempty"`
    Error *Error `json:"error,omitempty"`
    RequestID string `json:"requestId"`
    Resp RequestReference `json:"resp"`
    Timestamp time.Time `json:"timestamp"`
    
}

