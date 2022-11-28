package shared

// GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec
// Boost applies to products which match a condition.
type GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec struct {
	Boost     *float32 `json:"boost,omitempty"`
	Condition *string  `json:"condition,omitempty"`
}
