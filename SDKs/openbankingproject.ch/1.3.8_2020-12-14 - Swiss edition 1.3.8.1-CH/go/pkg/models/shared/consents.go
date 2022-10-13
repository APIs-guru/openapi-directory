package shared

import (
	"time"
)

type Consents struct {
	Access                   AccountAccess `json:"access"`
	CombinedServiceIndicator bool          `json:"combinedServiceIndicator"`
	FrequencyPerDay          int64         `json:"frequencyPerDay"`
	RecurringIndicator       bool          `json:"recurringIndicator"`
	ValidUntil               time.Time     `json:"validUntil"`
}
