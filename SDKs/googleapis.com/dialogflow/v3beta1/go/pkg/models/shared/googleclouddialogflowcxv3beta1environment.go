package shared



type GoogleCloudDialogflowCxV3beta1Environment struct {
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    TestCasesConfig *GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig `json:"testCasesConfig,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    VersionConfigs []GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig `json:"versionConfigs,omitempty"`
    WebhookConfig *GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig `json:"webhookConfig,omitempty"`
    
}

