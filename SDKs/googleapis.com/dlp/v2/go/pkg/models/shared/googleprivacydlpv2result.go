package shared

type GooglePrivacyDlpV2Result struct {
	HybridStats         *GooglePrivacyDlpV2HybridInspectStatistics `json:"hybridStats"`
	InfoTypeStats       []GooglePrivacyDlpV2InfoTypeStats          `json:"infoTypeStats"`
	ProcessedBytes      *string                                    `json:"processedBytes"`
	TotalEstimatedBytes *string                                    `json:"totalEstimatedBytes"`
}
