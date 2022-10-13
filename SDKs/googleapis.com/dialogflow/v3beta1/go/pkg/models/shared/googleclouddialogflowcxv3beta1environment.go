package shared

type GoogleCloudDialogflowCxV3beta1Environment struct {
	Description     *string                                                   `json:"description"`
	DisplayName     *string                                                   `json:"displayName"`
	Name            *string                                                   `json:"name"`
	TestCasesConfig *GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig `json:"testCasesConfig"`
	UpdateTime      *string                                                   `json:"updateTime"`
	VersionConfigs  []GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig  `json:"versionConfigs"`
	WebhookConfig   *GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig   `json:"webhookConfig"`
}
