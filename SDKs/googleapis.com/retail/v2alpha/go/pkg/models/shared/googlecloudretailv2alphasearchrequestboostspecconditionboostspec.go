package shared

// GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec
// Boost applies to products which match a condition.
type GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec struct {
	Boost     *float32 `json:"boost,omitempty"`
	Condition *string  `json:"condition,omitempty"`
}
