package shared

// NumericTargetingDimension
// Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.
type NumericTargetingDimension struct {
	ExcludedIds []string `json:"excludedIds,omitempty"`
	IncludedIds []string `json:"includedIds,omitempty"`
}
