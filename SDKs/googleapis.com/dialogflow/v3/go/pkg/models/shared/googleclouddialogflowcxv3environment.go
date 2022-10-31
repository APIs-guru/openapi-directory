package shared

type GoogleCloudDialogflowCxV3Environment struct {
	Description     *string                                              `json:"description,omitempty"`
	DisplayName     *string                                              `json:"displayName,omitempty"`
	Name            *string                                              `json:"name,omitempty"`
	TestCasesConfig *GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig `json:"testCasesConfig,omitempty"`
	UpdateTime      *string                                              `json:"updateTime,omitempty"`
	VersionConfigs  []GoogleCloudDialogflowCxV3EnvironmentVersionConfig  `json:"versionConfigs,omitempty"`
	WebhookConfig   *GoogleCloudDialogflowCxV3EnvironmentWebhookConfig   `json:"webhookConfig,omitempty"`
}
