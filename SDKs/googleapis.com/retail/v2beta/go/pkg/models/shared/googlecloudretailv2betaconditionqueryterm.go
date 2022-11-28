package shared

// GoogleCloudRetailV2betaConditionQueryTerm
// Query terms that we want to match on.
type GoogleCloudRetailV2betaConditionQueryTerm struct {
	FullMatch *bool   `json:"fullMatch,omitempty"`
	Value     *string `json:"value,omitempty"`
}
