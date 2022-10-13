package shared

type GoogleCloudContactcenterinsightsV1ConversationDataSource struct {
	DialogflowSource *GoogleCloudContactcenterinsightsV1DialogflowSource `json:"dialogflowSource"`
	GcsSource        *GoogleCloudContactcenterinsightsV1GcsSource        `json:"gcsSource"`
}
