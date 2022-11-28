package shared

// GooglePrivacyDlpV2Action
// A task to execute on the completion of a job. See https://cloud.google.com/dlp/docs/concepts-actions to learn more.
type GooglePrivacyDlpV2Action struct {
	Deidentify                        *GooglePrivacyDlpV2Deidentify      `json:"deidentify,omitempty"`
	JobNotificationEmails             map[string]interface{}             `json:"jobNotificationEmails,omitempty"`
	PubSub                            *GooglePrivacyDlpV2PublishToPubSub `json:"pubSub,omitempty"`
	PublishFindingsToCloudDataCatalog map[string]interface{}             `json:"publishFindingsToCloudDataCatalog,omitempty"`
	PublishSummaryToCscc              map[string]interface{}             `json:"publishSummaryToCscc,omitempty"`
	PublishToStackdriver              map[string]interface{}             `json:"publishToStackdriver,omitempty"`
	SaveFindings                      *GooglePrivacyDlpV2SaveFindings    `json:"saveFindings,omitempty"`
}
