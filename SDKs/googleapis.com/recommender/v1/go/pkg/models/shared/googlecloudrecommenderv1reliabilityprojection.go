package shared

type GoogleCloudRecommenderV1ReliabilityProjectionRisksEnum string

const (
	GoogleCloudRecommenderV1ReliabilityProjectionRisksEnumRiskTypeUnspecified GoogleCloudRecommenderV1ReliabilityProjectionRisksEnum = "RISK_TYPE_UNSPECIFIED"
	GoogleCloudRecommenderV1ReliabilityProjectionRisksEnumServiceDisruption   GoogleCloudRecommenderV1ReliabilityProjectionRisksEnum = "SERVICE_DISRUPTION"
	GoogleCloudRecommenderV1ReliabilityProjectionRisksEnumDataLoss            GoogleCloudRecommenderV1ReliabilityProjectionRisksEnum = "DATA_LOSS"
	GoogleCloudRecommenderV1ReliabilityProjectionRisksEnumAccessDeny          GoogleCloudRecommenderV1ReliabilityProjectionRisksEnum = "ACCESS_DENY"
)

// GoogleCloudRecommenderV1ReliabilityProjection
// Contains information on the impact of a reliability recommendation.
type GoogleCloudRecommenderV1ReliabilityProjection struct {
	Details map[string]interface{}                                   `json:"details,omitempty"`
	Risks   []GoogleCloudRecommenderV1ReliabilityProjectionRisksEnum `json:"risks,omitempty"`
}
