package shared

import (
	"time"
)

// ConsentInformationResponse200JSON
// Body of the JSON response for a successfull get consent request.
type ConsentInformationResponse200JSON struct {
	Links              map[string]HrefType `json:"_links,omitempty"`
	Access             AccountAccess       `json:"access"`
	ConsentStatus      ConsentStatusEnum   `json:"consentStatus"`
	FrequencyPerDay    int64               `json:"frequencyPerDay"`
	LastActionDate     time.Time           `json:"lastActionDate"`
	RecurringIndicator bool                `json:"recurringIndicator"`
	ValidUntil         time.Time           `json:"validUntil"`
}
