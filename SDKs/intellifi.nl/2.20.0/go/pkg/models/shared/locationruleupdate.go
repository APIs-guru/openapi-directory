package shared

// LocationRuleUpdateConditions
// Scope of this rule, e.g. moves at or away from a specific location or towards a specific location. The `from_location` is mandatory. The `to_location` is either mandatory, optional or not allowed depending on rule type.
type LocationRuleUpdateConditions struct {
	FromLocation *string `json:"from_location,omitempty"`
	ToLocation   *string `json:"to_location,omitempty"`
}

type LocationRuleUpdate struct {
	Conditions *LocationRuleUpdateConditions `json:"conditions,omitempty"`
	Enabled    *bool                         `json:"enabled,omitempty"`
	Label      *string                       `json:"label,omitempty"`
	Parameters map[string]interface{}        `json:"parameters,omitempty"`
	Type       *LocationRuleTypeEnum         `json:"type,omitempty"`
}
