package shared

type GooglePrivacyDlpV2HybridContentItem struct {
	FindingDetails *GooglePrivacyDlpV2HybridFindingDetails `json:"findingDetails"`
	Item           *GooglePrivacyDlpV2ContentItem          `json:"item"`
}
