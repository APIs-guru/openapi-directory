package shared

// GooglePrivacyDlpV2CreateDlpJobRequest
// Request message for CreateDlpJobRequest. Used to initiate long running jobs such as calculating risk metrics or inspecting Google Cloud Storage.
type GooglePrivacyDlpV2CreateDlpJobRequest struct {
	InspectJob *GooglePrivacyDlpV2InspectJobConfig      `json:"inspectJob,omitempty"`
	JobID      *string                                  `json:"jobId,omitempty"`
	LocationID *string                                  `json:"locationId,omitempty"`
	RiskJob    *GooglePrivacyDlpV2RiskAnalysisJobConfig `json:"riskJob,omitempty"`
}
