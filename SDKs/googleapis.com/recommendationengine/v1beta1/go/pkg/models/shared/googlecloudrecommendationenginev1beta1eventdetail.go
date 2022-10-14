package shared

type GoogleCloudRecommendationengineV1beta1EventDetail struct {
	EventAttributes     *GoogleCloudRecommendationengineV1beta1FeatureMap `json:"eventAttributes,omitempty"`
	ExperimentIds       []string                                          `json:"experimentIds,omitempty"`
	PageViewID          *string                                           `json:"pageViewId,omitempty"`
	RecommendationToken *string                                           `json:"recommendationToken,omitempty"`
	ReferrerURI         *string                                           `json:"referrerUri,omitempty"`
	URI                 *string                                           `json:"uri,omitempty"`
}
