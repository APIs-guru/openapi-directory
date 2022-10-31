package shared



type LocationRuleConditions11 struct {
    FromLocation *Location `json:"from_location,omitempty"`
    
}

type LocationRuleConditions12 struct {
    FromLocationID *string `json:"from_location_id,omitempty"`
    
}

type LocationRuleConditions13 struct {
    FromLocationURL *string `json:"from_location_url,omitempty"`
    
}

type LocationRuleConditions21 struct {
    ToLocation *Location `json:"to_location,omitempty"`
    
}

type LocationRuleConditions22 struct {
    ToLocationID *string `json:"to_location_id,omitempty"`
    
}

type LocationRuleConditions23 struct {
    ToLocationURL *string `json:"to_location_url,omitempty"`
    
}

type LocationRule struct {
    Conditions *interface{} `json:"conditions,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    ID *string `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    Parameters map[string]interface{} `json:"parameters,omitempty"`
    TimeCreated *string `json:"time_created,omitempty"`
    TimeUpdated *string `json:"time_updated,omitempty"`
    Type *LocationRuleTypeEnum `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

