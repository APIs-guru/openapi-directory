package shared

// GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec
// Boost applies to products which match a condition.
type GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec struct {
	Boost     *float32 `json:"boost,omitempty"`
	Condition *string  `json:"condition,omitempty"`
}
