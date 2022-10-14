package shared

type GooglePrivacyDlpV2InspectResult struct {
	Findings          []GooglePrivacyDlpV2Finding `json:"findings,omitempty"`
	FindingsTruncated *bool                       `json:"findingsTruncated,omitempty"`
}
