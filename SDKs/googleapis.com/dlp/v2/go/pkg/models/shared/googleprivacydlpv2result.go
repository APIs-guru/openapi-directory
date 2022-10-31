package shared

type GooglePrivacyDlpV2Result struct {
	HybridStats         *GooglePrivacyDlpV2HybridInspectStatistics `json:"hybridStats,omitempty"`
	InfoTypeStats       []GooglePrivacyDlpV2InfoTypeStats          `json:"infoTypeStats,omitempty"`
	ProcessedBytes      *string                                    `json:"processedBytes,omitempty"`
	TotalEstimatedBytes *string                                    `json:"totalEstimatedBytes,omitempty"`
}
