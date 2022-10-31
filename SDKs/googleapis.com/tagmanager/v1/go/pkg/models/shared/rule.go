package shared

type Rule struct {
	AccountID   *string     `json:"accountId,omitempty"`
	Condition   []Condition `json:"condition,omitempty"`
	ContainerID *string     `json:"containerId,omitempty"`
	Fingerprint *string     `json:"fingerprint,omitempty"`
	Name        *string     `json:"name,omitempty"`
	Notes       *string     `json:"notes,omitempty"`
	RuleID      *string     `json:"ruleId,omitempty"`
}
