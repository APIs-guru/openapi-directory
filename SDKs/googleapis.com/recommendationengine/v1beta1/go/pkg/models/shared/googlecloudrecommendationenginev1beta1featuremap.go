package shared

type GoogleCloudRecommendationengineV1beta1FeatureMap struct {
	CategoricalFeatures map[string]GoogleCloudRecommendationengineV1beta1FeatureMapStringList `json:"categoricalFeatures"`
	NumericalFeatures   map[string]GoogleCloudRecommendationengineV1beta1FeatureMapFloatList  `json:"numericalFeatures"`
}
