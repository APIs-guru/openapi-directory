package shared

type GoogleCloudRecommenderV1RecommendationPriorityEnum string

const (
	GoogleCloudRecommenderV1RecommendationPriorityEnumPriorityUnspecified GoogleCloudRecommenderV1RecommendationPriorityEnum = "PRIORITY_UNSPECIFIED"
	GoogleCloudRecommenderV1RecommendationPriorityEnumP4                  GoogleCloudRecommenderV1RecommendationPriorityEnum = "P4"
	GoogleCloudRecommenderV1RecommendationPriorityEnumP3                  GoogleCloudRecommenderV1RecommendationPriorityEnum = "P3"
	GoogleCloudRecommenderV1RecommendationPriorityEnumP2                  GoogleCloudRecommenderV1RecommendationPriorityEnum = "P2"
	GoogleCloudRecommenderV1RecommendationPriorityEnumP1                  GoogleCloudRecommenderV1RecommendationPriorityEnum = "P1"
)

// GoogleCloudRecommenderV1Recommendation
// A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
type GoogleCloudRecommenderV1Recommendation struct {
	AdditionalImpact   []GoogleCloudRecommenderV1Impact                         `json:"additionalImpact,omitempty"`
	AssociatedInsights []GoogleCloudRecommenderV1RecommendationInsightReference `json:"associatedInsights,omitempty"`
	Content            *GoogleCloudRecommenderV1RecommendationContent           `json:"content,omitempty"`
	Description        *string                                                  `json:"description,omitempty"`
	Etag               *string                                                  `json:"etag,omitempty"`
	LastRefreshTime    *string                                                  `json:"lastRefreshTime,omitempty"`
	Name               *string                                                  `json:"name,omitempty"`
	PrimaryImpact      *GoogleCloudRecommenderV1Impact                          `json:"primaryImpact,omitempty"`
	Priority           *GoogleCloudRecommenderV1RecommendationPriorityEnum      `json:"priority,omitempty"`
	RecommenderSubtype *string                                                  `json:"recommenderSubtype,omitempty"`
	StateInfo          *GoogleCloudRecommenderV1RecommendationStateInfo         `json:"stateInfo,omitempty"`
	XorGroupID         *string                                                  `json:"xorGroupId,omitempty"`
}
