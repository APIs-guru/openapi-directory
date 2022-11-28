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

// GoogleCloudRecommenderV1beta1Insight
// An insight along with the information used to derive the insight. The insight may have associated recommendations as well.
type GoogleCloudRecommenderV1beta1Insight struct {
	AssociatedRecommendations []GoogleCloudRecommenderV1beta1InsightRecommendationReference `json:"associatedRecommendations,omitempty"`
	Category                  *GoogleCloudRecommenderV1beta1InsightCategoryEnum             `json:"category,omitempty"`
	Content                   map[string]interface{}                                        `json:"content,omitempty"`
	Description               *string                                                       `json:"description,omitempty"`
	Etag                      *string                                                       `json:"etag,omitempty"`
	InsightSubtype            *string                                                       `json:"insightSubtype,omitempty"`
	LastRefreshTime           *string                                                       `json:"lastRefreshTime,omitempty"`
	Name                      *string                                                       `json:"name,omitempty"`
	ObservationPeriod         *string                                                       `json:"observationPeriod,omitempty"`
	Severity                  *GoogleCloudRecommenderV1beta1InsightSeverityEnum             `json:"severity,omitempty"`
	StateInfo                 *GoogleCloudRecommenderV1beta1InsightStateInfo                `json:"stateInfo,omitempty"`
	TargetResources           []string                                                      `json:"targetResources,omitempty"`
}
