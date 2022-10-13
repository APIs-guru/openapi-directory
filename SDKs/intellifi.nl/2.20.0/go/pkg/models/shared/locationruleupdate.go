package shared

type LocationRuleUpdateConditions struct {
	FromLocation *string `json:"from_location"`
	ToLocation   *string `json:"to_location"`
}

type LocationRuleUpdate struct {
	Conditions *LocationRuleUpdateConditions `json:"conditions"`
	Enabled    *bool                         `json:"enabled"`
	Label      *string                       `json:"label"`
	Parameters map[string]interface{}        `json:"parameters"`
	Type       *LocationRuleTypeEnum         `json:"type"`
}
