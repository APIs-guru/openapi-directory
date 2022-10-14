package shared

type TargetsPresentCondition struct {
	MissingTargets []string `json:"missingTargets,omitempty"`
	Status         *bool    `json:"status,omitempty"`
	UpdateTime     *string  `json:"updateTime,omitempty"`
}
