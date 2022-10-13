package shared

type LocationRuleConditions11 struct {
	FromLocation *Location `json:"from_location"`
}

type LocationRuleConditions12 struct {
	FromLocationID *string `json:"from_location_id"`
}

type LocationRuleConditions13 struct {
	FromLocationURL *string `json:"from_location_url"`
}

type LocationRuleConditions21 struct {
	ToLocation *Location `json:"to_location"`
}

type LocationRuleConditions22 struct {
	ToLocationID *string `json:"to_location_id"`
}

type LocationRuleConditions23 struct {
	ToLocationURL *string `json:"to_location_url"`
}

type LocationRule struct {
	Conditions  *interface{}           `json:"conditions"`
	Enabled     *bool                  `json:"enabled"`
	ID          *string                `json:"id"`
	Label       *string                `json:"label"`
	Parameters  map[string]interface{} `json:"parameters"`
	TimeCreated *string                `json:"time_created"`
	TimeUpdated *string                `json:"time_updated"`
	Type        *LocationRuleTypeEnum  `json:"type"`
	URL         *string                `json:"url"`
}
