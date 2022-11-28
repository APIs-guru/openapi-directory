package shared

// GoogleCloudContactcenterinsightsV1ConversationDataSource
// The conversation source, which is a combination of transcript and audio.
type GoogleCloudContactcenterinsightsV1ConversationDataSource struct {
	DialogflowSource *GoogleCloudContactcenterinsightsV1DialogflowSource `json:"dialogflowSource,omitempty"`
	GcsSource        *GoogleCloudContactcenterinsightsV1GcsSource        `json:"gcsSource,omitempty"`
}

// GoogleCloudContactcenterinsightsV1ConversationDataSourceInput
// The conversation source, which is a combination of transcript and audio.
type GoogleCloudContactcenterinsightsV1ConversationDataSourceInput struct {
	DialogflowSource *GoogleCloudContactcenterinsightsV1DialogflowSourceInput `json:"dialogflowSource,omitempty"`
	GcsSource        *GoogleCloudContactcenterinsightsV1GcsSource             `json:"gcsSource,omitempty"`
}
