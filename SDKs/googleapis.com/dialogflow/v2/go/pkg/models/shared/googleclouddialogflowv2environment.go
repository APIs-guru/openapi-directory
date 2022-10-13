package shared

type GoogleCloudDialogflowV2EnvironmentStateEnum string

const (
	GoogleCloudDialogflowV2EnvironmentStateEnumStateUnspecified GoogleCloudDialogflowV2EnvironmentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowV2EnvironmentStateEnumStopped          GoogleCloudDialogflowV2EnvironmentStateEnum = "STOPPED"
	GoogleCloudDialogflowV2EnvironmentStateEnumLoading          GoogleCloudDialogflowV2EnvironmentStateEnum = "LOADING"
	GoogleCloudDialogflowV2EnvironmentStateEnumRunning          GoogleCloudDialogflowV2EnvironmentStateEnum = "RUNNING"
)

type GoogleCloudDialogflowV2Environment struct {
	AgentVersion         *string                                      `json:"agentVersion"`
	Description          *string                                      `json:"description"`
	Fulfillment          *GoogleCloudDialogflowV2Fulfillment          `json:"fulfillment"`
	Name                 *string                                      `json:"name"`
	State                *GoogleCloudDialogflowV2EnvironmentStateEnum `json:"state"`
	TextToSpeechSettings *GoogleCloudDialogflowV2TextToSpeechSettings `json:"textToSpeechSettings"`
	UpdateTime           *string                                      `json:"updateTime"`
}
