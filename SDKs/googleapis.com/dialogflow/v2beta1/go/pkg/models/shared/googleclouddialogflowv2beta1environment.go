package shared

type GoogleCloudDialogflowV2beta1EnvironmentStateEnum string

const (
	GoogleCloudDialogflowV2beta1EnvironmentStateEnumStateUnspecified GoogleCloudDialogflowV2beta1EnvironmentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1EnvironmentStateEnumStopped          GoogleCloudDialogflowV2beta1EnvironmentStateEnum = "STOPPED"
	GoogleCloudDialogflowV2beta1EnvironmentStateEnumLoading          GoogleCloudDialogflowV2beta1EnvironmentStateEnum = "LOADING"
	GoogleCloudDialogflowV2beta1EnvironmentStateEnumRunning          GoogleCloudDialogflowV2beta1EnvironmentStateEnum = "RUNNING"
)

type GoogleCloudDialogflowV2beta1Environment struct {
	AgentVersion         *string                                           `json:"agentVersion"`
	Description          *string                                           `json:"description"`
	Fulfillment          *GoogleCloudDialogflowV2beta1Fulfillment          `json:"fulfillment"`
	Name                 *string                                           `json:"name"`
	State                *GoogleCloudDialogflowV2beta1EnvironmentStateEnum `json:"state"`
	TextToSpeechSettings *GoogleCloudDialogflowV2beta1TextToSpeechSettings `json:"textToSpeechSettings"`
	UpdateTime           *string                                           `json:"updateTime"`
}
