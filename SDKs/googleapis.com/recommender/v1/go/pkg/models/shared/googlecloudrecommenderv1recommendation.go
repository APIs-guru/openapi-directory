package shared

type GoogleCloudRecommenderV1RecommendationPriorityEnum string

const (
	GoogleCloudRecommenderV1RecommendationPriorityEnumPriorityUnspecified GoogleCloudRecommenderV1RecommendationPriorityEnum = "PRIORITY_UNSPECIFIED"
	GoogleCloudRecommenderV1RecommendationPriorityEnumP4                  GoogleCloudRecommenderV1RecommendationPriorityEnum = "P4"
	GoogleCloudRecommenderV1RecommendationPriorityEnumP3                  GoogleCloudRecommenderV1RecommendationPriorityEnum = "P3"
	GoogleCloudRecommenderV1RecommendationPriorityEnumP2                  GoogleCloudRecommenderV1RecommendationPriorityEnum = "P2"
	GoogleCloudRecommenderV1RecommendationPriorityEnumP1                  GoogleCloudRecommenderV1RecommendationPriorityEnum = "P1"
)

type GoogleCloudRecommenderV1Recommendation struct {
	AdditionalImpact   []GoogleCloudRecommenderV1Impact                         `json:"additionalImpact"`
	AssociatedInsights []GoogleCloudRecommenderV1RecommendationInsightReference `json:"associatedInsights"`
	Content            *GoogleCloudRecommenderV1RecommendationContent           `json:"content"`
	Description        *string                                                  `json:"description"`
	Etag               *string                                                  `json:"etag"`
	LastRefreshTime    *string                                                  `json:"lastRefreshTime"`
	Name               *string                                                  `json:"name"`
	PrimaryImpact      *GoogleCloudRecommenderV1Impact                          `json:"primaryImpact"`
	Priority           *GoogleCloudRecommenderV1RecommendationPriorityEnum      `json:"priority"`
	RecommenderSubtype *string                                                  `json:"recommenderSubtype"`
	StateInfo          *GoogleCloudRecommenderV1RecommendationStateInfo         `json:"stateInfo"`
	XorGroupID         *string                                                  `json:"xorGroupId"`
}
