package shared

// GoogleCloudDialogflowCxV3EnvironmentInput
// Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
type GoogleCloudDialogflowCxV3EnvironmentInput struct {
	Description     *string                                              `json:"description,omitempty"`
	DisplayName     *string                                              `json:"displayName,omitempty"`
	Name            *string                                              `json:"name,omitempty"`
	TestCasesConfig *GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig `json:"testCasesConfig,omitempty"`
	VersionConfigs  []GoogleCloudDialogflowCxV3EnvironmentVersionConfig  `json:"versionConfigs,omitempty"`
	WebhookConfig   *GoogleCloudDialogflowCxV3EnvironmentWebhookConfig   `json:"webhookConfig,omitempty"`
}

// GoogleCloudDialogflowCxV3Environment
// Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
type GoogleCloudDialogflowCxV3Environment struct {
	Description     *string                                              `json:"description,omitempty"`
	DisplayName     *string                                              `json:"displayName,omitempty"`
	Name            *string                                              `json:"name,omitempty"`
	TestCasesConfig *GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig `json:"testCasesConfig,omitempty"`
	UpdateTime      *string                                              `json:"updateTime,omitempty"`
	VersionConfigs  []GoogleCloudDialogflowCxV3EnvironmentVersionConfig  `json:"versionConfigs,omitempty"`
	WebhookConfig   *GoogleCloudDialogflowCxV3EnvironmentWebhookConfig   `json:"webhookConfig,omitempty"`
}
