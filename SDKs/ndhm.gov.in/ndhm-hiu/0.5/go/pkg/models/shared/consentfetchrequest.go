package shared

import (
"time")

type ConsentFetchRequest struct {
    ConsentID string `json:"consentId"`
    RequestID string `json:"requestId"`
    Timestamp time.Time `json:"timestamp"`
    
}

