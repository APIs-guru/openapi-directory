package shared



type GoogleCloudDialogflowV2beta1ResponseMessage struct {
    EndInteraction map[string]interface{} `json:"endInteraction,omitempty"`
    LiveAgentHandoff *GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff `json:"liveAgentHandoff,omitempty"`
    MixedAudio *GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio `json:"mixedAudio,omitempty"`
    Payload map[string]interface{} `json:"payload,omitempty"`
    TelephonyTransferCall *GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall `json:"telephonyTransferCall,omitempty"`
    Text *GoogleCloudDialogflowV2beta1ResponseMessageText `json:"text,omitempty"`
    
}

