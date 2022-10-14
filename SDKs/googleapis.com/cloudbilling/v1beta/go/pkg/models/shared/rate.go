package shared

type Rate struct {
	Tiers     []RateTier `json:"tiers,omitempty"`
	Unit      *string    `json:"unit,omitempty"`
	UnitCount *float64   `json:"unitCount,omitempty"`
}
