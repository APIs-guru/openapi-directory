package shared

// GoogleCloudContactcenterinsightsV1DialogflowSource
// A Dialogflow source of conversation data.
type GoogleCloudContactcenterinsightsV1DialogflowSource struct {
	AudioURI               *string `json:"audioUri,omitempty"`
	DialogflowConversation *string `json:"dialogflowConversation,omitempty"`
}

// GoogleCloudContactcenterinsightsV1DialogflowSourceInput
// A Dialogflow source of conversation data.
type GoogleCloudContactcenterinsightsV1DialogflowSourceInput struct {
	AudioURI *string `json:"audioUri,omitempty"`
}
