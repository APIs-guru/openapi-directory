package shared




type GoogleCloudRecommenderV1beta1RecommendationPriorityEnum string

const (
    GoogleCloudRecommenderV1beta1RecommendationPriorityEnumPriorityUnspecified GoogleCloudRecommenderV1beta1RecommendationPriorityEnum = "PRIORITY_UNSPECIFIED"
GoogleCloudRecommenderV1beta1RecommendationPriorityEnumP4 GoogleCloudRecommenderV1beta1RecommendationPriorityEnum = "P4"
GoogleCloudRecommenderV1beta1RecommendationPriorityEnumP3 GoogleCloudRecommenderV1beta1RecommendationPriorityEnum = "P3"
GoogleCloudRecommenderV1beta1RecommendationPriorityEnumP2 GoogleCloudRecommenderV1beta1RecommendationPriorityEnum = "P2"
GoogleCloudRecommenderV1beta1RecommendationPriorityEnumP1 GoogleCloudRecommenderV1beta1RecommendationPriorityEnum = "P1"
)


type GoogleCloudRecommenderV1beta1Recommendation struct {
    AdditionalImpact []GoogleCloudRecommenderV1beta1Impact `json:"additionalImpact,omitempty"`
    AssociatedInsights []GoogleCloudRecommenderV1beta1RecommendationInsightReference `json:"associatedInsights,omitempty"`
    Content *GoogleCloudRecommenderV1beta1RecommendationContent `json:"content,omitempty"`
    Description *string `json:"description,omitempty"`
    Etag *string `json:"etag,omitempty"`
    LastRefreshTime *string `json:"lastRefreshTime,omitempty"`
    Name *string `json:"name,omitempty"`
    PrimaryImpact *GoogleCloudRecommenderV1beta1Impact `json:"primaryImpact,omitempty"`
    Priority *GoogleCloudRecommenderV1beta1RecommendationPriorityEnum `json:"priority,omitempty"`
    RecommenderSubtype *string `json:"recommenderSubtype,omitempty"`
    StateInfo *GoogleCloudRecommenderV1beta1RecommendationStateInfo `json:"stateInfo,omitempty"`
    XorGroupID *string `json:"xorGroupId,omitempty"`
    
}

