package shared

// GoogleCloudRecommenderV1CostProjection
// Contains metadata about how much money a recommendation can save or incur.
type GoogleCloudRecommenderV1CostProjection struct {
	Cost     *GoogleTypeMoney `json:"cost,omitempty"`
	Duration *string          `json:"duration,omitempty"`
}
