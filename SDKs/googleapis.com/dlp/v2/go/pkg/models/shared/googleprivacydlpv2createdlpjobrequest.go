package shared

type GooglePrivacyDlpV2CreateDlpJobRequest struct {
	InspectJob *GooglePrivacyDlpV2InspectJobConfig      `json:"inspectJob,omitempty"`
	JobID      *string                                  `json:"jobId,omitempty"`
	LocationID *string                                  `json:"locationId,omitempty"`
	RiskJob    *GooglePrivacyDlpV2RiskAnalysisJobConfig `json:"riskJob,omitempty"`
}
