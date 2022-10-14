package shared

type GoogleCloudDialogflowCxV3beta1ResponseMessage struct {
	ConversationSuccess   *GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess   `json:"conversationSuccess,omitempty"`
	EndInteraction        map[string]interface{}                                              `json:"endInteraction,omitempty"`
	LiveAgentHandoff      *GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff      `json:"liveAgentHandoff,omitempty"`
	MixedAudio            *GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio            `json:"mixedAudio,omitempty"`
	OutputAudioText       *GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText       `json:"outputAudioText,omitempty"`
	Payload               map[string]interface{}                                              `json:"payload,omitempty"`
	PlayAudio             *GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio             `json:"playAudio,omitempty"`
	TelephonyTransferCall *GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall `json:"telephonyTransferCall,omitempty"`
	Text                  *GoogleCloudDialogflowCxV3beta1ResponseMessageText                  `json:"text,omitempty"`
}
