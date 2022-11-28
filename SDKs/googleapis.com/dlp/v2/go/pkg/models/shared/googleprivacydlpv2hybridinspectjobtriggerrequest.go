package shared

// GooglePrivacyDlpV2HybridInspectJobTriggerRequest
// Request to search for potentially sensitive info in a custom location.
type GooglePrivacyDlpV2HybridInspectJobTriggerRequest struct {
	HybridItem *GooglePrivacyDlpV2HybridContentItem `json:"hybridItem,omitempty"`
}
