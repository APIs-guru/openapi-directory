package shared

type NumericTargetingDimension struct {
	ExcludedIds []string `json:"excludedIds"`
	IncludedIds []string `json:"includedIds"`
}
