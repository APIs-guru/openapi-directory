package shared

type GooglePrivacyDlpV2CreateDlpJobRequest struct {
	InspectJob *GooglePrivacyDlpV2InspectJobConfig      `json:"inspectJob"`
	JobID      *string                                  `json:"jobId"`
	LocationID *string                                  `json:"locationId"`
	RiskJob    *GooglePrivacyDlpV2RiskAnalysisJobConfig `json:"riskJob"`
}
