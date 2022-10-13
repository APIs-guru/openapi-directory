package shared

type Rule struct {
	AccountID   *string     `json:"accountId"`
	Condition   []Condition `json:"condition"`
	ContainerID *string     `json:"containerId"`
	Fingerprint *string     `json:"fingerprint"`
	Name        *string     `json:"name"`
	Notes       *string     `json:"notes"`
	RuleID      *string     `json:"ruleId"`
}
