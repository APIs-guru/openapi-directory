package shared

type GooglePrivacyDlpV2InspectResult struct {
	Findings          []GooglePrivacyDlpV2Finding `json:"findings"`
	FindingsTruncated *bool                       `json:"findingsTruncated"`
}
