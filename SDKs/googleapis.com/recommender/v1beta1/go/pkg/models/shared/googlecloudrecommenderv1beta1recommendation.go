package shared

type GoogleCloudRecommenderV1beta1RecommendationPriorityEnum string

const (
	GoogleCloudRecommenderV1beta1RecommendationPriorityEnumPriorityUnspecified GoogleCloudRecommenderV1beta1RecommendationPriorityEnum = "PRIORITY_UNSPECIFIED"
	GoogleCloudRecommenderV1beta1RecommendationPriorityEnumP4                  GoogleCloudRecommenderV1beta1RecommendationPriorityEnum = "P4"
	GoogleCloudRecommenderV1beta1RecommendationPriorityEnumP3                  GoogleCloudRecommenderV1beta1RecommendationPriorityEnum = "P3"
	GoogleCloudRecommenderV1beta1RecommendationPriorityEnumP2                  GoogleCloudRecommenderV1beta1RecommendationPriorityEnum = "P2"
	GoogleCloudRecommenderV1beta1RecommendationPriorityEnumP1                  GoogleCloudRecommenderV1beta1RecommendationPriorityEnum = "P1"
)

type GoogleCloudRecommenderV1beta1Recommendation struct {
	AdditionalImpact   []GoogleCloudRecommenderV1beta1Impact                         `json:"additionalImpact"`
	AssociatedInsights []GoogleCloudRecommenderV1beta1RecommendationInsightReference `json:"associatedInsights"`
	Content            *GoogleCloudRecommenderV1beta1RecommendationContent           `json:"content"`
	Description        *string                                                       `json:"description"`
	Etag               *string                                                       `json:"etag"`
	LastRefreshTime    *string                                                       `json:"lastRefreshTime"`
	Name               *string                                                       `json:"name"`
	PrimaryImpact      *GoogleCloudRecommenderV1beta1Impact                          `json:"primaryImpact"`
	Priority           *GoogleCloudRecommenderV1beta1RecommendationPriorityEnum      `json:"priority"`
	RecommenderSubtype *string                                                       `json:"recommenderSubtype"`
	StateInfo          *GoogleCloudRecommenderV1beta1RecommendationStateInfo         `json:"stateInfo"`
	XorGroupID         *string                                                       `json:"xorGroupId"`
}
