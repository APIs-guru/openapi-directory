package shared

type GoogleCloudRecommenderV1InsightCategoryEnum string

const (
	GoogleCloudRecommenderV1InsightCategoryEnumCategoryUnspecified GoogleCloudRecommenderV1InsightCategoryEnum = "CATEGORY_UNSPECIFIED"
	GoogleCloudRecommenderV1InsightCategoryEnumCost                GoogleCloudRecommenderV1InsightCategoryEnum = "COST"
	GoogleCloudRecommenderV1InsightCategoryEnumSecurity            GoogleCloudRecommenderV1InsightCategoryEnum = "SECURITY"
	GoogleCloudRecommenderV1InsightCategoryEnumPerformance         GoogleCloudRecommenderV1InsightCategoryEnum = "PERFORMANCE"
	GoogleCloudRecommenderV1InsightCategoryEnumManageability       GoogleCloudRecommenderV1InsightCategoryEnum = "MANAGEABILITY"
	GoogleCloudRecommenderV1InsightCategoryEnumSustainability      GoogleCloudRecommenderV1InsightCategoryEnum = "SUSTAINABILITY"
	GoogleCloudRecommenderV1InsightCategoryEnumReliability         GoogleCloudRecommenderV1InsightCategoryEnum = "RELIABILITY"
)

type GoogleCloudRecommenderV1InsightSeverityEnum string

const (
	GoogleCloudRecommenderV1InsightSeverityEnumSeverityUnspecified GoogleCloudRecommenderV1InsightSeverityEnum = "SEVERITY_UNSPECIFIED"
	GoogleCloudRecommenderV1InsightSeverityEnumLow                 GoogleCloudRecommenderV1InsightSeverityEnum = "LOW"
	GoogleCloudRecommenderV1InsightSeverityEnumMedium              GoogleCloudRecommenderV1InsightSeverityEnum = "MEDIUM"
	GoogleCloudRecommenderV1InsightSeverityEnumHigh                GoogleCloudRecommenderV1InsightSeverityEnum = "HIGH"
	GoogleCloudRecommenderV1InsightSeverityEnumCritical            GoogleCloudRecommenderV1InsightSeverityEnum = "CRITICAL"
)

type GoogleCloudRecommenderV1Insight struct {
	AssociatedRecommendations []GoogleCloudRecommenderV1InsightRecommendationReference `json:"associatedRecommendations"`
	Category                  *GoogleCloudRecommenderV1InsightCategoryEnum             `json:"category"`
	Content                   map[string]interface{}                                   `json:"content"`
	Description               *string                                                  `json:"description"`
	Etag                      *string                                                  `json:"etag"`
	InsightSubtype            *string                                                  `json:"insightSubtype"`
	LastRefreshTime           *string                                                  `json:"lastRefreshTime"`
	Name                      *string                                                  `json:"name"`
	ObservationPeriod         *string                                                  `json:"observationPeriod"`
	Severity                  *GoogleCloudRecommenderV1InsightSeverityEnum             `json:"severity"`
	StateInfo                 *GoogleCloudRecommenderV1InsightStateInfo                `json:"stateInfo"`
	TargetResources           []string                                                 `json:"targetResources"`
}
