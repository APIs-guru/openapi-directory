package shared

type Rate struct {
	Tiers     []RateTier `json:"tiers"`
	Unit      *string    `json:"unit"`
	UnitCount *float64   `json:"unitCount"`
}
