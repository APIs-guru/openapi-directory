package shared

type GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnum string

const (
	GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnumRiskTypeUnspecified GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnum = "RISK_TYPE_UNSPECIFIED"
	GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnumServiceDisruption   GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnum = "SERVICE_DISRUPTION"
	GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnumDataLoss            GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnum = "DATA_LOSS"
	GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnumAccessDeny          GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnum = "ACCESS_DENY"
)

// GoogleCloudRecommenderV1beta1ReliabilityProjection
// Contains information on the impact of a reliability recommendation.
type GoogleCloudRecommenderV1beta1ReliabilityProjection struct {
	Details map[string]interface{}                                        `json:"details,omitempty"`
	Risks   []GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnum `json:"risks,omitempty"`
}
