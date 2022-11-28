package shared

// ReleaseInput
// `Release` is a named reference to a `Ruleset`. Once a `Release` refers to a `Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.
type ReleaseInput struct {
	Name        *string `json:"name,omitempty"`
	RulesetName *string `json:"rulesetName,omitempty"`
}

// Release
// `Release` is a named reference to a `Ruleset`. Once a `Release` refers to a `Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.
type Release struct {
	CreateTime  *string `json:"createTime,omitempty"`
	Name        *string `json:"name,omitempty"`
	RulesetName *string `json:"rulesetName,omitempty"`
	UpdateTime  *string `json:"updateTime,omitempty"`
}
