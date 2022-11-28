package shared

type GoogleCloudDialogflowV2EnvironmentStateEnum string

const (
	GoogleCloudDialogflowV2EnvironmentStateEnumStateUnspecified GoogleCloudDialogflowV2EnvironmentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowV2EnvironmentStateEnumStopped          GoogleCloudDialogflowV2EnvironmentStateEnum = "STOPPED"
	GoogleCloudDialogflowV2EnvironmentStateEnumLoading          GoogleCloudDialogflowV2EnvironmentStateEnum = "LOADING"
	GoogleCloudDialogflowV2EnvironmentStateEnumRunning          GoogleCloudDialogflowV2EnvironmentStateEnum = "RUNNING"
)

// GoogleCloudDialogflowV2EnvironmentInput
// You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
type GoogleCloudDialogflowV2EnvironmentInput struct {
	AgentVersion         *string                                      `json:"agentVersion,omitempty"`
	Description          *string                                      `json:"description,omitempty"`
	Fulfillment          *GoogleCloudDialogflowV2Fulfillment          `json:"fulfillment,omitempty"`
	TextToSpeechSettings *GoogleCloudDialogflowV2TextToSpeechSettings `json:"textToSpeechSettings,omitempty"`
}

// GoogleCloudDialogflowV2Environment
// You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
type GoogleCloudDialogflowV2Environment struct {
	AgentVersion         *string                                      `json:"agentVersion,omitempty"`
	Description          *string                                      `json:"description,omitempty"`
	Fulfillment          *GoogleCloudDialogflowV2Fulfillment          `json:"fulfillment,omitempty"`
	Name                 *string                                      `json:"name,omitempty"`
	State                *GoogleCloudDialogflowV2EnvironmentStateEnum `json:"state,omitempty"`
	TextToSpeechSettings *GoogleCloudDialogflowV2TextToSpeechSettings `json:"textToSpeechSettings,omitempty"`
	UpdateTime           *string                                      `json:"updateTime,omitempty"`
}
