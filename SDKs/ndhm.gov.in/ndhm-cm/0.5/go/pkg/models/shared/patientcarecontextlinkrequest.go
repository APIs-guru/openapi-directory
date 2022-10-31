package shared

import (
"time")

type PatientCareContextLinkRequest struct {
    Link PatientCareContextLink `json:"link"`
    RequestID string `json:"requestId"`
    Timestamp time.Time `json:"timestamp"`
    
}

