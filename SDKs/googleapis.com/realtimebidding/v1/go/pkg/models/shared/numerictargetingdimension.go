package shared

type NumericTargetingDimension struct {
	ExcludedIds []string `json:"excludedIds,omitempty"`
	IncludedIds []string `json:"includedIds,omitempty"`
}
