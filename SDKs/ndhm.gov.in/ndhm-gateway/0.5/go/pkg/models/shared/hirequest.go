package shared

import (
"time")

type HiRequestHiRequest struct {
    Consent Consent `json:"consent"`
    DataPushURL string `json:"dataPushUrl"`
    DateRange DateRange `json:"dateRange"`
    KeyMaterial KeyMaterial `json:"keyMaterial"`
    
}

type HiRequest struct {
    HiRequest HiRequestHiRequest `json:"hiRequest"`
    RequestID string `json:"requestId"`
    Timestamp time.Time `json:"timestamp"`
    
}

