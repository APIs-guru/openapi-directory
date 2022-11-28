package shared

// GoogleCloudRecommenderV1beta1CostProjection
// Contains metadata about how much money a recommendation can save or incur.
type GoogleCloudRecommenderV1beta1CostProjection struct {
	Cost     *GoogleTypeMoney `json:"cost,omitempty"`
	Duration *string          `json:"duration,omitempty"`
}
