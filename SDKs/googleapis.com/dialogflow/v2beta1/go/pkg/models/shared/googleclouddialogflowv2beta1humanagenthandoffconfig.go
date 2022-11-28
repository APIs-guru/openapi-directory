package shared

// GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig
// Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. Currently, this feature is not general available, please contact Google to get access.
type GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig struct {
	LivePersonConfig          *GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig          `json:"livePersonConfig,omitempty"`
	SalesforceLiveAgentConfig *GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig `json:"salesforceLiveAgentConfig,omitempty"`
}
