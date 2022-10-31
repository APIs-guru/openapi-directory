package shared

type GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec struct {
	Boost     *float32 `json:"boost,omitempty"`
	Condition *string  `json:"condition,omitempty"`
}
