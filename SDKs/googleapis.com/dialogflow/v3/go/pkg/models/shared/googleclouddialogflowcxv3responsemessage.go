package shared

type GoogleCloudDialogflowCxV3ResponseMessage struct {
	ConversationSuccess   *GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess   `json:"conversationSuccess"`
	EndInteraction        map[string]interface{}                                         `json:"endInteraction"`
	LiveAgentHandoff      *GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff      `json:"liveAgentHandoff"`
	MixedAudio            *GoogleCloudDialogflowCxV3ResponseMessageMixedAudio            `json:"mixedAudio"`
	OutputAudioText       *GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText       `json:"outputAudioText"`
	Payload               map[string]interface{}                                         `json:"payload"`
	PlayAudio             *GoogleCloudDialogflowCxV3ResponseMessagePlayAudio             `json:"playAudio"`
	TelephonyTransferCall *GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall `json:"telephonyTransferCall"`
	Text                  *GoogleCloudDialogflowCxV3ResponseMessageText                  `json:"text"`
}
