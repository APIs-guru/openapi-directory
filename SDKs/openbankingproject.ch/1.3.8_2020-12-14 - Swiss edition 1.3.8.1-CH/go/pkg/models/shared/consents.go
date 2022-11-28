package shared

import (
	"time"
)

// Consents
// Content of the body of a consent request.
type Consents struct {
	Access                   AccountAccess `json:"access"`
	CombinedServiceIndicator bool          `json:"combinedServiceIndicator"`
	FrequencyPerDay          int64         `json:"frequencyPerDay"`
	RecurringIndicator       bool          `json:"recurringIndicator"`
	ValidUntil               time.Time     `json:"validUntil"`
}
