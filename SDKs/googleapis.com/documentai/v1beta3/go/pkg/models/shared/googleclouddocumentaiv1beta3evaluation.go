package shared

// GoogleCloudDocumentaiV1beta3Evaluation
// An evaluation of a ProcessorVersion's performance.
type GoogleCloudDocumentaiV1beta3Evaluation struct {
	AllEntitiesMetrics *GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics           `json:"allEntitiesMetrics,omitempty"`
	CreateTime         *string                                                                 `json:"createTime,omitempty"`
	DocumentCounters   *GoogleCloudDocumentaiV1beta3EvaluationCounters                         `json:"documentCounters,omitempty"`
	EntityMetrics      map[string]GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics `json:"entityMetrics,omitempty"`
	KmsKeyName         *string                                                                 `json:"kmsKeyName,omitempty"`
	KmsKeyVersionName  *string                                                                 `json:"kmsKeyVersionName,omitempty"`
	Name               *string                                                                 `json:"name,omitempty"`
}
