package shared

// GoogleCloudDocumentaiV1beta3EvaluationCounters
// Evaluation counters for the documents that were used.
type GoogleCloudDocumentaiV1beta3EvaluationCounters struct {
	EvaluatedDocumentsCount *int32 `json:"evaluatedDocumentsCount,omitempty"`
	FailedDocumentsCount    *int32 `json:"failedDocumentsCount,omitempty"`
	InputDocumentsCount     *int32 `json:"inputDocumentsCount,omitempty"`
	InvalidDocumentsCount   *int32 `json:"invalidDocumentsCount,omitempty"`
}
