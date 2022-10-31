package shared

import (
"time")

type ConsentInformationResponse200JSON struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    Access AccountAccess `json:"access"`
    ConsentStatus ConsentStatusEnum `json:"consentStatus"`
    FrequencyPerDay int64 `json:"frequencyPerDay"`
    LastActionDate time.Time `json:"lastActionDate"`
    RecurringIndicator bool `json:"recurringIndicator"`
    ValidUntil time.Time `json:"validUntil"`
    
}

