package shared

// GoogleCloudRecommenderV1beta1RecommenderGenerationConfig
// A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation.
type GoogleCloudRecommenderV1beta1RecommenderGenerationConfig struct {
	Params map[string]interface{} `json:"params,omitempty"`
}
