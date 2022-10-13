package shared

type GoogleCloudDialogflowCxV3Environment struct {
	Description     *string                                              `json:"description"`
	DisplayName     *string                                              `json:"displayName"`
	Name            *string                                              `json:"name"`
	TestCasesConfig *GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig `json:"testCasesConfig"`
	UpdateTime      *string                                              `json:"updateTime"`
	VersionConfigs  []GoogleCloudDialogflowCxV3EnvironmentVersionConfig  `json:"versionConfigs"`
	WebhookConfig   *GoogleCloudDialogflowCxV3EnvironmentWebhookConfig   `json:"webhookConfig"`
}
