package shared

type ConsumerQuotaLimit struct {
	AllowsAdminOverrides *bool         `json:"allowsAdminOverrides"`
	IsPrecise            *bool         `json:"isPrecise"`
	Metric               *string       `json:"metric"`
	Name                 *string       `json:"name"`
	QuotaBuckets         []QuotaBucket `json:"quotaBuckets"`
	SupportedLocations   []string      `json:"supportedLocations"`
	Unit                 *string       `json:"unit"`
}
