package shared

// GooglePrivacyDlpV2InspectDataSourceDetails
// The results of an inspect DataSource job.
type GooglePrivacyDlpV2InspectDataSourceDetails struct {
	RequestedOptions *GooglePrivacyDlpV2RequestedOptions `json:"requestedOptions,omitempty"`
	Result           *GooglePrivacyDlpV2Result           `json:"result,omitempty"`
}
