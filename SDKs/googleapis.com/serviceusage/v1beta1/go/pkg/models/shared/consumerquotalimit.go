package shared

// ConsumerQuotaLimit
// Consumer quota settings for a quota limit.
type ConsumerQuotaLimit struct {
	AllowsAdminOverrides *bool         `json:"allowsAdminOverrides,omitempty"`
	IsPrecise            *bool         `json:"isPrecise,omitempty"`
	Metric               *string       `json:"metric,omitempty"`
	Name                 *string       `json:"name,omitempty"`
	QuotaBuckets         []QuotaBucket `json:"quotaBuckets,omitempty"`
	SupportedLocations   []string      `json:"supportedLocations,omitempty"`
	Unit                 *string       `json:"unit,omitempty"`
}
