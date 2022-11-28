package shared

// GoogleCloudDialogflowV2HumanAgentHandoffConfig
// Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. Currently, this feature is not general available, please contact Google to get access.
type GoogleCloudDialogflowV2HumanAgentHandoffConfig struct {
	LivePersonConfig          *GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig          `json:"livePersonConfig,omitempty"`
	SalesforceLiveAgentConfig *GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig `json:"salesforceLiveAgentConfig,omitempty"`
}
