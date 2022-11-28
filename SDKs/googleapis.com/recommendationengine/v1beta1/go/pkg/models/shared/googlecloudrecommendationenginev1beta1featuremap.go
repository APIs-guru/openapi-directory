package shared

// GoogleCloudRecommendationengineV1beta1FeatureMap
// FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features.
type GoogleCloudRecommendationengineV1beta1FeatureMap struct {
	CategoricalFeatures map[string]GoogleCloudRecommendationengineV1beta1FeatureMapStringList `json:"categoricalFeatures,omitempty"`
	NumericalFeatures   map[string]GoogleCloudRecommendationengineV1beta1FeatureMapFloatList  `json:"numericalFeatures,omitempty"`
}
