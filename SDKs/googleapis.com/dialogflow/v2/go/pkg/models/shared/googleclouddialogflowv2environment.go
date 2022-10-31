package shared




type GoogleCloudDialogflowV2EnvironmentStateEnum string

const (
    GoogleCloudDialogflowV2EnvironmentStateEnumStateUnspecified GoogleCloudDialogflowV2EnvironmentStateEnum = "STATE_UNSPECIFIED"
GoogleCloudDialogflowV2EnvironmentStateEnumStopped GoogleCloudDialogflowV2EnvironmentStateEnum = "STOPPED"
GoogleCloudDialogflowV2EnvironmentStateEnumLoading GoogleCloudDialogflowV2EnvironmentStateEnum = "LOADING"
GoogleCloudDialogflowV2EnvironmentStateEnumRunning GoogleCloudDialogflowV2EnvironmentStateEnum = "RUNNING"
)


type GoogleCloudDialogflowV2Environment struct {
    AgentVersion *string `json:"agentVersion,omitempty"`
    Description *string `json:"description,omitempty"`
    Fulfillment *GoogleCloudDialogflowV2Fulfillment `json:"fulfillment,omitempty"`
    Name *string `json:"name,omitempty"`
    State *GoogleCloudDialogflowV2EnvironmentStateEnum `json:"state,omitempty"`
    TextToSpeechSettings *GoogleCloudDialogflowV2TextToSpeechSettings `json:"textToSpeechSettings,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

