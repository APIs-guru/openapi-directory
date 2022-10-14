package shared

type RuleActionEnum string

const (
	RuleActionEnumNoAction     RuleActionEnum = "NO_ACTION"
	RuleActionEnumAllow        RuleActionEnum = "ALLOW"
	RuleActionEnumAllowWithLog RuleActionEnum = "ALLOW_WITH_LOG"
	RuleActionEnumDeny         RuleActionEnum = "DENY"
	RuleActionEnumDenyWithLog  RuleActionEnum = "DENY_WITH_LOG"
	RuleActionEnumLog          RuleActionEnum = "LOG"
)

type Rule struct {
	Action      *RuleActionEnum `json:"action,omitempty"`
	Conditions  []Condition     `json:"conditions,omitempty"`
	Description *string         `json:"description,omitempty"`
	In          []string        `json:"in,omitempty"`
	LogConfig   []LogConfig     `json:"logConfig,omitempty"`
	NotIn       []string        `json:"notIn,omitempty"`
	Permissions []string        `json:"permissions,omitempty"`
}
