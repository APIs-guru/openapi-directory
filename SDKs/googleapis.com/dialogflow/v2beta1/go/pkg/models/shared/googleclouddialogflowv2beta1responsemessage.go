package shared

type GoogleCloudDialogflowV2beta1ResponseMessage struct {
	EndInteraction        map[string]interface{}                                            `json:"endInteraction"`
	LiveAgentHandoff      *GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff      `json:"liveAgentHandoff"`
	MixedAudio            *GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio            `json:"mixedAudio"`
	Payload               map[string]interface{}                                            `json:"payload"`
	TelephonyTransferCall *GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall `json:"telephonyTransferCall"`
	Text                  *GoogleCloudDialogflowV2beta1ResponseMessageText                  `json:"text"`
}
