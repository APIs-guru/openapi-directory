package shared

type GoogleCloudRecommendationengineV1beta1EventDetail struct {
	EventAttributes     *GoogleCloudRecommendationengineV1beta1FeatureMap `json:"eventAttributes"`
	ExperimentIds       []string                                          `json:"experimentIds"`
	PageViewID          *string                                           `json:"pageViewId"`
	RecommendationToken *string                                           `json:"recommendationToken"`
	ReferrerURI         *string                                           `json:"referrerUri"`
	URI                 *string                                           `json:"uri"`
}
