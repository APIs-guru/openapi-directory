package shared

// TargetsPresentCondition
// TargetsPresentCondition contains information on any Targets defined in the Delivery Pipeline that do not actually exist.
type TargetsPresentCondition struct {
	MissingTargets []string `json:"missingTargets,omitempty"`
	Status         *bool    `json:"status,omitempty"`
	UpdateTime     *string  `json:"updateTime,omitempty"`
}
