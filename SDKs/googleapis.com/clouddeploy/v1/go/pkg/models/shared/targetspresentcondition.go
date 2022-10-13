package shared

type TargetsPresentCondition struct {
	MissingTargets []string `json:"missingTargets"`
	Status         *bool    `json:"status"`
	UpdateTime     *string  `json:"updateTime"`
}
