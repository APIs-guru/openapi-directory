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
	Action      *RuleActionEnum `json:"action"`
	Conditions  []Condition     `json:"conditions"`
	Description *string         `json:"description"`
	In          []string        `json:"in"`
	LogConfig   []LogConfig     `json:"logConfig"`
	NotIn       []string        `json:"notIn"`
	Permissions []string        `json:"permissions"`
}
