package shared

type GoogleCloudDialogflowCxV3ResponseMessage struct {
	ConversationSuccess   *GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess   `json:"conversationSuccess,omitempty"`
	EndInteraction        map[string]interface{}                                         `json:"endInteraction,omitempty"`
	LiveAgentHandoff      *GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff      `json:"liveAgentHandoff,omitempty"`
	MixedAudio            *GoogleCloudDialogflowCxV3ResponseMessageMixedAudio            `json:"mixedAudio,omitempty"`
	OutputAudioText       *GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText       `json:"outputAudioText,omitempty"`
	Payload               map[string]interface{}                                         `json:"payload,omitempty"`
	PlayAudio             *GoogleCloudDialogflowCxV3ResponseMessagePlayAudio             `json:"playAudio,omitempty"`
	TelephonyTransferCall *GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall `json:"telephonyTransferCall,omitempty"`
	Text                  *GoogleCloudDialogflowCxV3ResponseMessageText                  `json:"text,omitempty"`
}
