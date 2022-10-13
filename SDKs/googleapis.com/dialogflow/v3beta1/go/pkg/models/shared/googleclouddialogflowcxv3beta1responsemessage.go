package shared

type GoogleCloudDialogflowCxV3beta1ResponseMessage struct {
	ConversationSuccess   *GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess   `json:"conversationSuccess"`
	EndInteraction        map[string]interface{}                                              `json:"endInteraction"`
	LiveAgentHandoff      *GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff      `json:"liveAgentHandoff"`
	MixedAudio            *GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio            `json:"mixedAudio"`
	OutputAudioText       *GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText       `json:"outputAudioText"`
	Payload               map[string]interface{}                                              `json:"payload"`
	PlayAudio             *GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio             `json:"playAudio"`
	TelephonyTransferCall *GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall `json:"telephonyTransferCall"`
	Text                  *GoogleCloudDialogflowCxV3beta1ResponseMessageText                  `json:"text"`
}
