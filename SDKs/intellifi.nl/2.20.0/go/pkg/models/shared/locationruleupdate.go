package shared



type LocationRuleUpdateConditions struct {
    FromLocation *string `json:"from_location,omitempty"`
    ToLocation *string `json:"to_location,omitempty"`
    
}

type LocationRuleUpdate struct {
    Conditions *LocationRuleUpdateConditions `json:"conditions,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    Label *string `json:"label,omitempty"`
    Parameters map[string]interface{} `json:"parameters,omitempty"`
    Type *LocationRuleTypeEnum `json:"type,omitempty"`
    
}

