package shared

// GoogleCloudRetailV2ConditionQueryTerm
// Query terms that we want to match on.
type GoogleCloudRetailV2ConditionQueryTerm struct {
	FullMatch *bool   `json:"fullMatch,omitempty"`
	Value     *string `json:"value,omitempty"`
}
