package shared

type GoogleCloudRecommenderV1beta1InsightCategoryEnum string

const (
	GoogleCloudRecommenderV1beta1InsightCategoryEnumCategoryUnspecified GoogleCloudRecommenderV1beta1InsightCategoryEnum = "CATEGORY_UNSPECIFIED"
	GoogleCloudRecommenderV1beta1InsightCategoryEnumCost                GoogleCloudRecommenderV1beta1InsightCategoryEnum = "COST"
	GoogleCloudRecommenderV1beta1InsightCategoryEnumSecurity            GoogleCloudRecommenderV1beta1InsightCategoryEnum = "SECURITY"
	GoogleCloudRecommenderV1beta1InsightCategoryEnumPerformance         GoogleCloudRecommenderV1beta1InsightCategoryEnum = "PERFORMANCE"
	GoogleCloudRecommenderV1beta1InsightCategoryEnumManageability       GoogleCloudRecommenderV1beta1InsightCategoryEnum = "MANAGEABILITY"
	GoogleCloudRecommenderV1beta1InsightCategoryEnumSustainability      GoogleCloudRecommenderV1beta1InsightCategoryEnum = "SUSTAINABILITY"
	GoogleCloudRecommenderV1beta1InsightCategoryEnumReliability         GoogleCloudRecommenderV1beta1InsightCategoryEnum = "RELIABILITY"
)

type GoogleCloudRecommenderV1beta1InsightSeverityEnum string

const (
	GoogleCloudRecommenderV1beta1InsightSeverityEnumSeverityUnspecified GoogleCloudRecommenderV1beta1InsightSeverityEnum = "SEVERITY_UNSPECIFIED"
	GoogleCloudRecommenderV1beta1InsightSeverityEnumLow                 GoogleCloudRecommenderV1beta1InsightSeverityEnum = "LOW"
	GoogleCloudRecommenderV1beta1InsightSeverityEnumMedium              GoogleCloudRecommenderV1beta1InsightSeverityEnum = "MEDIUM"
	GoogleCloudRecommenderV1beta1InsightSeverityEnumHigh                GoogleCloudRecommenderV1beta1InsightSeverityEnum = "HIGH"
	GoogleCloudRecommenderV1beta1InsightSeverityEnumCritical            GoogleCloudRecommenderV1beta1InsightSeverityEnum = "CRITICAL"
)

type GoogleCloudRecommenderV1beta1Insight struct {
	AssociatedRecommendations []GoogleCloudRecommenderV1beta1InsightRecommendationReference `json:"associatedRecommendations"`
	Category                  *GoogleCloudRecommenderV1beta1InsightCategoryEnum             `json:"category"`
	Content                   map[string]interface{}                                        `json:"content"`
	Description               *string                                                       `json:"description"`
	Etag                      *string                                                       `json:"etag"`
	InsightSubtype            *string                                                       `json:"insightSubtype"`
	LastRefreshTime           *string                                                       `json:"lastRefreshTime"`
	Name                      *string                                                       `json:"name"`
	ObservationPeriod         *string                                                       `json:"observationPeriod"`
	Severity                  *GoogleCloudRecommenderV1beta1InsightSeverityEnum             `json:"severity"`
	StateInfo                 *GoogleCloudRecommenderV1beta1InsightStateInfo                `json:"stateInfo"`
	TargetResources           []string                                                      `json:"targetResources"`
}
