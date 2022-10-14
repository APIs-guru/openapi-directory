package shared

type GoogleCloudContactcenterinsightsV1ConversationDataSource struct {
	DialogflowSource *GoogleCloudContactcenterinsightsV1DialogflowSource `json:"dialogflowSource,omitempty"`
	GcsSource        *GoogleCloudContactcenterinsightsV1GcsSource        `json:"gcsSource,omitempty"`
}
