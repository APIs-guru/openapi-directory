package shared

// GooglePrivacyDlpV2InspectResult
// All the findings for a single scanned item.
type GooglePrivacyDlpV2InspectResult struct {
	Findings          []GooglePrivacyDlpV2Finding `json:"findings,omitempty"`
	FindingsTruncated *bool                       `json:"findingsTruncated,omitempty"`
}
