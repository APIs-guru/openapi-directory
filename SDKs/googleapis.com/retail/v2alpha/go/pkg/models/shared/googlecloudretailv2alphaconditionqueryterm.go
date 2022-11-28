package shared

// GoogleCloudRetailV2alphaConditionQueryTerm
// Query terms that we want to match on.
type GoogleCloudRetailV2alphaConditionQueryTerm struct {
	FullMatch *bool   `json:"fullMatch,omitempty"`
	Value     *string `json:"value,omitempty"`
}
