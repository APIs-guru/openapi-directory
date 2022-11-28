package shared

// GoogleCloudDialogflowCxV3ResponseMessageInput
// Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
type GoogleCloudDialogflowCxV3ResponseMessageInput struct {
	ConversationSuccess   *GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess   `json:"conversationSuccess,omitempty"`
	EndInteraction        map[string]interface{}                                         `json:"endInteraction,omitempty"`
	LiveAgentHandoff      *GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff      `json:"liveAgentHandoff,omitempty"`
	MixedAudio            *GoogleCloudDialogflowCxV3ResponseMessageMixedAudioInput       `json:"mixedAudio,omitempty"`
	OutputAudioText       *GoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextInput  `json:"outputAudioText,omitempty"`
	Payload               map[string]interface{}                                         `json:"payload,omitempty"`
	PlayAudio             *GoogleCloudDialogflowCxV3ResponseMessagePlayAudioInput        `json:"playAudio,omitempty"`
	TelephonyTransferCall *GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall `json:"telephonyTransferCall,omitempty"`
	Text                  *GoogleCloudDialogflowCxV3ResponseMessageTextInput             `json:"text,omitempty"`
}

// GoogleCloudDialogflowCxV3ResponseMessage
// Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
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
