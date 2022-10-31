package shared




type GoogleCloudRecommenderV1InsightCategoryEnum string

const (
    GoogleCloudRecommenderV1InsightCategoryEnumCategoryUnspecified GoogleCloudRecommenderV1InsightCategoryEnum = "CATEGORY_UNSPECIFIED"
GoogleCloudRecommenderV1InsightCategoryEnumCost GoogleCloudRecommenderV1InsightCategoryEnum = "COST"
GoogleCloudRecommenderV1InsightCategoryEnumSecurity GoogleCloudRecommenderV1InsightCategoryEnum = "SECURITY"
GoogleCloudRecommenderV1InsightCategoryEnumPerformance GoogleCloudRecommenderV1InsightCategoryEnum = "PERFORMANCE"
GoogleCloudRecommenderV1InsightCategoryEnumManageability GoogleCloudRecommenderV1InsightCategoryEnum = "MANAGEABILITY"
GoogleCloudRecommenderV1InsightCategoryEnumSustainability GoogleCloudRecommenderV1InsightCategoryEnum = "SUSTAINABILITY"
GoogleCloudRecommenderV1InsightCategoryEnumReliability GoogleCloudRecommenderV1InsightCategoryEnum = "RELIABILITY"
)



type GoogleCloudRecommenderV1InsightSeverityEnum string

const (
    GoogleCloudRecommenderV1InsightSeverityEnumSeverityUnspecified GoogleCloudRecommenderV1InsightSeverityEnum = "SEVERITY_UNSPECIFIED"
GoogleCloudRecommenderV1InsightSeverityEnumLow GoogleCloudRecommenderV1InsightSeverityEnum = "LOW"
GoogleCloudRecommenderV1InsightSeverityEnumMedium GoogleCloudRecommenderV1InsightSeverityEnum = "MEDIUM"
GoogleCloudRecommenderV1InsightSeverityEnumHigh GoogleCloudRecommenderV1InsightSeverityEnum = "HIGH"
GoogleCloudRecommenderV1InsightSeverityEnumCritical GoogleCloudRecommenderV1InsightSeverityEnum = "CRITICAL"
)


type GoogleCloudRecommenderV1Insight struct {
    AssociatedRecommendations []GoogleCloudRecommenderV1InsightRecommendationReference `json:"associatedRecommendations,omitempty"`
    Category *GoogleCloudRecommenderV1InsightCategoryEnum `json:"category,omitempty"`
    Content map[string]interface{} `json:"content,omitempty"`
    Description *string `json:"description,omitempty"`
    Etag *string `json:"etag,omitempty"`
    InsightSubtype *string `json:"insightSubtype,omitempty"`
    LastRefreshTime *string `json:"lastRefreshTime,omitempty"`
    Name *string `json:"name,omitempty"`
    ObservationPeriod *string `json:"observationPeriod,omitempty"`
    Severity *GoogleCloudRecommenderV1InsightSeverityEnum `json:"severity,omitempty"`
    StateInfo *GoogleCloudRecommenderV1InsightStateInfo `json:"stateInfo,omitempty"`
    TargetResources []string `json:"targetResources,omitempty"`
    
}

