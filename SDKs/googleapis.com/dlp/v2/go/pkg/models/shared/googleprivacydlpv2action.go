package shared

type GooglePrivacyDlpV2Action struct {
	Deidentify                        *GooglePrivacyDlpV2Deidentify      `json:"deidentify"`
	JobNotificationEmails             map[string]interface{}             `json:"jobNotificationEmails"`
	PubSub                            *GooglePrivacyDlpV2PublishToPubSub `json:"pubSub"`
	PublishFindingsToCloudDataCatalog map[string]interface{}             `json:"publishFindingsToCloudDataCatalog"`
	PublishSummaryToCscc              map[string]interface{}             `json:"publishSummaryToCscc"`
	PublishToStackdriver              map[string]interface{}             `json:"publishToStackdriver"`
	SaveFindings                      *GooglePrivacyDlpV2SaveFindings    `json:"saveFindings"`
}
