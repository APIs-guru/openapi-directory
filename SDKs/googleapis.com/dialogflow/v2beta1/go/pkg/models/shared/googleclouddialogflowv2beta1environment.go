package shared

type GoogleCloudDialogflowV2beta1EnvironmentStateEnum string

const (
	GoogleCloudDialogflowV2beta1EnvironmentStateEnumStateUnspecified GoogleCloudDialogflowV2beta1EnvironmentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1EnvironmentStateEnumStopped          GoogleCloudDialogflowV2beta1EnvironmentStateEnum = "STOPPED"
	GoogleCloudDialogflowV2beta1EnvironmentStateEnumLoading          GoogleCloudDialogflowV2beta1EnvironmentStateEnum = "LOADING"
	GoogleCloudDialogflowV2beta1EnvironmentStateEnumRunning          GoogleCloudDialogflowV2beta1EnvironmentStateEnum = "RUNNING"
)

// GoogleCloudDialogflowV2beta1Environment
// You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
type GoogleCloudDialogflowV2beta1Environment struct {
	AgentVersion         *string                                           `json:"agentVersion,omitempty"`
	Description          *string                                           `json:"description,omitempty"`
	Fulfillment          *GoogleCloudDialogflowV2beta1Fulfillment          `json:"fulfillment,omitempty"`
	Name                 *string                                           `json:"name,omitempty"`
	State                *GoogleCloudDialogflowV2beta1EnvironmentStateEnum `json:"state,omitempty"`
	TextToSpeechSettings *GoogleCloudDialogflowV2beta1TextToSpeechSettings `json:"textToSpeechSettings,omitempty"`
	UpdateTime           *string                                           `json:"updateTime,omitempty"`
}

// GoogleCloudDialogflowV2beta1EnvironmentInput
// You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
type GoogleCloudDialogflowV2beta1EnvironmentInput struct {
	AgentVersion         *string                                           `json:"agentVersion,omitempty"`
	Description          *string                                           `json:"description,omitempty"`
	Fulfillment          *GoogleCloudDialogflowV2beta1Fulfillment          `json:"fulfillment,omitempty"`
	TextToSpeechSettings *GoogleCloudDialogflowV2beta1TextToSpeechSettings `json:"textToSpeechSettings,omitempty"`
}
