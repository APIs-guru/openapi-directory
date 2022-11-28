package shared

// GooglePrivacyDlpV2HybridContentItem
// An individual hybrid item to inspect. Will be stored temporarily during processing.
type GooglePrivacyDlpV2HybridContentItem struct {
	FindingDetails *GooglePrivacyDlpV2HybridFindingDetails `json:"findingDetails,omitempty"`
	Item           *GooglePrivacyDlpV2ContentItem          `json:"item,omitempty"`
}
