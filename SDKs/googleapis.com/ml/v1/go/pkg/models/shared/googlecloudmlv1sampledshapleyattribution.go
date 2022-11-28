package shared

// GoogleCloudMlV1SampledShapleyAttribution
// An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features.
type GoogleCloudMlV1SampledShapleyAttribution struct {
	NumPaths *int32 `json:"numPaths,omitempty"`
}
