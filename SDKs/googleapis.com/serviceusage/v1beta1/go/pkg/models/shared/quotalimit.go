package shared

// QuotaLimit
// `QuotaLimit` defines a specific limit that applies over a specified duration for a limit type. There can be at most one limit for a duration and limit type combination defined within a `QuotaGroup`.
type QuotaLimit struct {
	DefaultLimit *string           `json:"defaultLimit,omitempty"`
	Description  *string           `json:"description,omitempty"`
	DisplayName  *string           `json:"displayName,omitempty"`
	Duration     *string           `json:"duration,omitempty"`
	FreeTier     *string           `json:"freeTier,omitempty"`
	MaxLimit     *string           `json:"maxLimit,omitempty"`
	Metric       *string           `json:"metric,omitempty"`
	Name         *string           `json:"name,omitempty"`
	Unit         *string           `json:"unit,omitempty"`
	Values       map[string]string `json:"values,omitempty"`
}
